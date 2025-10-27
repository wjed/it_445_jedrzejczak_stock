import json
import boto3
import uuid
from datetime import datetime
import base64
import os
import re

dynamodb = boto3.resource('dynamodb')
bedrock_agent = boto3.client('bedrock-agent-runtime')
bedrock_runtime = boto3.client('bedrock-runtime')
table = dynamodb.Table(os.environ['TABLE_NAME'])
profiles_table = dynamodb.Table(os.environ['PROFILES_TABLE_NAME'])
games_table = dynamodb.Table(os.environ['GAMES_TABLE_NAME'])
leaderboard_table = dynamodb.Table(os.environ['LEADERBOARD_TABLE_NAME'])
user_pool_id = os.environ['USER_POOL_ID']
knowledge_base_id = os.environ['KNOWLEDGE_BASE_ID']

def decode_jwt_payload(token):
    # Simple JWT payload extraction without verification
    # In production, you should properly verify the JWT signature
    try:
        parts = token.split('.')
        if len(parts) != 3:
            return None
        
        payload = parts[1]
        # Add padding if needed
        payload += '=' * (4 - len(payload) % 4)
        decoded_bytes = base64.urlsafe_b64decode(payload)
        return json.loads(decoded_bytes.decode('utf-8'))
    except Exception as e:
        print(f"JWT decode error: {str(e)}")
        return None

def query_knowledge_base(question):
    try:
        response = bedrock_agent.retrieve_and_generate(
            input={
                'text': question
            },
            retrieveAndGenerateConfiguration={
                'type': 'KNOWLEDGE_BASE',
                'knowledgeBaseConfiguration': {
                    'knowledgeBaseId': knowledge_base_id,
                    'modelArn': 'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0'
                }
            }
        )
        return response['output']['text']
    except Exception as e:
        print(f"Bedrock error: {str(e)}")
        if "ResourceNotFoundException" in str(e):
            return "The knowledge base is currently being set up. In the meantime, here are some general IT major resources:\\n\\n• Contact Ellen Hedrick (hedricme@jmu.edu) for academic advising\\n• Check the JMU IT major website for course requirements\\n• Review the course catalog for prerequisites\\n\\nPlease try again later once the knowledge base is configured."
        return f"I'm sorry, I'm having trouble accessing the knowledge base right now. Please try again later or contact your academic advisor directly."

def generate_question(course_id, course_type):
    """Generate a dynamic question using Bedrock"""
    try:
        prompts = {
            'coding': f"""Generate a programming question for {course_id}. Return JSON with:
            {{
                "id": "unique_id",
                "title": "Question title",
                "description": "Problem description",
                "type": "coding",
                "code": "starter code if needed",
                "placeholder": "Enter your code here...",
                "answer": "expected answer or solution approach",
                "explanation": "explanation of the solution"
            }}
            Make it appropriate for the course level.""",
            
            'networking': f"""Generate a networking question for {course_id}. Return JSON with:
            {{
                "id": "unique_id", 
                "title": "Question title",
                "description": "Network problem description",
                "type": "text",
                "placeholder": "Enter your answer...",
                "answer": "correct answer",
                "explanation": "explanation of the solution"
            }}
            Focus on subnetting, IP addressing, or network configuration.""",
            
            'algorithms': f"""Generate an algorithms question for {course_id}. Return JSON with:
            {{
                "id": "unique_id",
                "title": "Question title", 
                "description": "Algorithm problem",
                "type": "multiple-choice",
                "options": ["option1", "option2", "option3", "option4"],
                "answer": "correct option",
                "explanation": "why this is correct"
            }}""",
            
            'database': f"""Generate a SQL/database question for {course_id}. Return JSON with:
            {{
                "id": "unique_id",
                "title": "Question title",
                "description": "Database problem", 
                "type": "coding",
                "code": "CREATE TABLE example...",
                "placeholder": "Write your SQL query here...",
                "answer": "correct SQL query",
                "explanation": "explanation of the query"
            }}""",
            
            'software-engineering': f"""Generate a software engineering question for {course_id}. Return JSON with:
            {{
                "id": "unique_id",
                "title": "Question title",
                "description": "Design pattern or architecture question",
                "type": "multiple-choice", 
                "options": ["option1", "option2", "option3", "option4"],
                "answer": "correct option",
                "explanation": "explanation"
            }}"""
        }
        
        prompt = prompts.get(course_type, prompts['coding'])
        
        response = bedrock_runtime.invoke_model(
            modelId='anthropic.claude-3-sonnet-20240229-v1:0',
            body=json.dumps({
                'anthropic_version': 'bedrock-2023-05-31',
                'max_tokens': 1000,
                'messages': [{'role': 'user', 'content': prompt}]
            })
        )
        
        result = json.loads(response['body'].read())
        content = result['content'][0]['text']
        
        # Extract JSON from the response
        json_match = re.search(r'\{.*\}', content, re.DOTALL)
        if json_match:
            question_data = json.loads(json_match.group())
            question_data['id'] = str(uuid.uuid4())
            return question_data
        else:
            # Fallback question if AI generation fails
            return get_fallback_question(course_id, course_type)
            
    except Exception as e:
        print(f"Question generation error: {str(e)}")
        return get_fallback_question(course_id, course_type)

def get_fallback_question(course_id, course_type):
    """Fallback questions when AI generation fails"""
    fallbacks = {
        'CS149': {
            'id': str(uuid.uuid4()),
            'title': 'Basic Loop Problem',
            'description': 'Write a function that prints numbers 1 to 10.',
            'type': 'coding',
            'placeholder': 'def print_numbers():\\n    # Your code here',
            'answer': 'for i in range(1, 11): print(i)',
            'explanation': 'Use a for loop with range(1, 11) to print numbers 1 through 10.'
        },
        'IT215': {
            'id': str(uuid.uuid4()),
            'title': 'Subnet Calculation',
            'description': 'What is the subnet mask for a /24 network?',
            'type': 'text',
            'placeholder': 'Enter the subnet mask (e.g., 255.255.255.0)',
            'answer': '255.255.255.0',
            'explanation': 'A /24 network uses 24 bits for the network portion, leaving 8 bits for hosts, resulting in 255.255.255.0.'
        }
    }
    
    return fallbacks.get(course_id, fallbacks['CS149'])

def check_answer(question_data, user_answer):
    """Check if the user's answer is correct"""
    correct_answer = question_data.get('answer', '').lower().strip()
    user_answer = user_answer.lower().strip()
    
    # For coding questions, check if key concepts are present
    if question_data.get('type') == 'coding':
        # Simple keyword matching for now
        keywords = correct_answer.split()
        matches = sum(1 for keyword in keywords if keyword in user_answer)
        score = matches / len(keywords) if keywords else 0
        is_correct = score > 0.5
    else:
        # Exact match for other types
        is_correct = user_answer == correct_answer
    
    points = 100 if is_correct else 0
    
    return {
        'correct': is_correct,
        'points': points,
        'type': 'correct' if is_correct else 'incorrect',
        'message': 'Correct!' if is_correct else 'Not quite right.',
        'explanation': question_data.get('explanation', '')
    }

def handler(event, context):
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    }
    
    try:
        if event['httpMethod'] == 'OPTIONS':
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps('OK')
            }
        
        # Extract token for protected endpoints
        user_info = None
        auth_header = event.get('headers', {}).get('Authorization', '')
        if auth_header.startswith('Bearer '):
            token = auth_header[7:]
            user_info = decode_jwt_payload(token)
        
        if event['httpMethod'] == 'GET':
            path = event.get('path', '/')
            
            if path == '/profile':
                # Protected endpoint - get user profile
                if not user_info or not user_info.get('sub'):
                    return {
                        'statusCode': 401,
                        'headers': headers,
                        'body': json.dumps({'error': 'Authentication required'})
                    }
                
                try:
                    response = profiles_table.get_item(Key={'user_id': user_info['sub']})
                    if 'Item' in response:
                        return {
                            'statusCode': 200,
                            'headers': headers,
                            'body': json.dumps(response['Item'])
                        }
                    else:
                        return {
                            'statusCode': 404,
                            'headers': headers,
                            'body': json.dumps({'error': 'Profile not found'})
                        }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            elif path == '/games/leaderboard':
                # Get leaderboard data - public endpoint
                try:
                    response = leaderboard_table.scan()
                    items = response.get('Items', [])
                    
                    # Sort by score (descending) and take top 50
                    sorted_items = sorted(items, key=lambda x: x.get('score', 0), reverse=True)[:50]
                    
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({'leaderboard': sorted_items})
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            else:
                # Public endpoint - no auth required
                response = table.scan()
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps(response['Items'])
                }
        
        if event['httpMethod'] == 'POST':
            # Protected endpoint - basic auth check
            if not user_info or not user_info.get('sub'):
                return {
                    'statusCode': 401,
                    'headers': headers,
                    'body': json.dumps({'error': 'Authentication required'})
                }
            
            path = event.get('path', '/')
            body = json.loads(event['body'])
            
            if path == '/profile':
                # Save user profile
                try:
                    profile_data = {
                        'user_id': user_info['sub'],
                        'profile': body.get('profile', {}),
                        'email': user_info.get('email', ''),
                        'updated_at': datetime.now().isoformat()
                    }
                    
                    profiles_table.put_item(Item=profile_data)
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({'message': 'Profile saved successfully', 'profile': profile_data})
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            elif path == '/chat':
                # Chat with knowledge base
                try:
                    question = body.get('question', '')
                    if not question:
                        return {
                            'statusCode': 400,
                            'headers': headers,
                            'body': json.dumps({'error': 'Question is required'})
                        }
                    
                    # Query the knowledge base
                    answer = query_knowledge_base(question)
                    
                    # Store the chat interaction
                    chat_item = {
                        'id': str(uuid.uuid4()),
                        'question': question,
                        'answer': answer,
                        'user_id': user_info.get('sub', 'unknown'),
                        'user_email': user_info.get('email', 'unknown'),
                        'timestamp': datetime.now().isoformat()
                    }
                    table.put_item(Item=chat_item)
                    
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({
                            'question': question,
                            'answer': answer,
                            'timestamp': chat_item['timestamp']
                        })
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            elif path == '/games/question':
                # Generate a new question
                try:
                    course_id = body.get('courseId', '')
                    course_type = body.get('courseType', 'coding')
                    
                    question = generate_question(course_id, course_type)
                    
                    # Store question for validation later
                    games_table.put_item(Item={
                        'id': question['id'],
                        'type': 'question',
                        'course_id': course_id,
                        'question_data': question,
                        'user_id': user_info.get('sub'),
                        'timestamp': datetime.now().isoformat()
                    })
                    
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({'question': question})
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            elif path == '/games/submit':
                # Check answer
                try:
                    question_id = body.get('questionId', '')
                    user_answer = body.get('answer', '')
                    
                    # Get the question data
                    response = games_table.get_item(Key={'id': question_id, 'type': 'question'})
                    if 'Item' not in response:
                        return {
                            'statusCode': 404,
                            'headers': headers,
                            'body': json.dumps({'error': 'Question not found'})
                        }
                    
                    question_data = response['Item']['question_data']
                    feedback = check_answer(question_data, user_answer)
                    
                    # Store the answer
                    games_table.put_item(Item={
                        'id': str(uuid.uuid4()),
                        'type': 'answer',
                        'question_id': question_id,
                        'user_answer': user_answer,
                        'feedback': feedback,
                        'user_id': user_info.get('sub'),
                        'timestamp': datetime.now().isoformat()
                    })
                    
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({'feedback': feedback, **feedback})
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            elif path == '/games/finish':
                # Save quiz results to leaderboard
                try:
                    course_id = body.get('courseId', '')
                    score = body.get('score', 0)
                    questions_answered = body.get('questionsAnswered', 0)
                    
                    # Create leaderboard entry
                    timestamp = datetime.now().isoformat()
                    score_timestamp = f"{score:06d}#{timestamp}"  # For sorting by score desc
                    
                    leaderboard_table.put_item(Item={
                        'course_id': course_id,
                        'score_timestamp': score_timestamp,
                        'user_id': user_info.get('sub'),
                        'player_name': user_info.get('email', 'Anonymous').split('@')[0],
                        'course_name': course_id,
                        'score': score,
                        'questions_answered': questions_answered,
                        'date': timestamp
                    })
                    
                    return {
                        'statusCode': 200,
                        'headers': headers,
                        'body': json.dumps({'message': 'Quiz completed successfully'})
                    }
                except Exception as e:
                    return {
                        'statusCode': 500,
                        'headers': headers,
                        'body': json.dumps({'error': str(e)})
                    }
            else:
                # Default chat/message endpoint
                item = {
                    'id': str(uuid.uuid4()),
                    'message': body.get('message', ''),
                    'user_id': user_info.get('sub', 'unknown'),
                    'user_email': user_info.get('email', 'unknown'),
                    'timestamp': datetime.now().isoformat()
                }
                table.put_item(Item=item)
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps(item)
                }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }