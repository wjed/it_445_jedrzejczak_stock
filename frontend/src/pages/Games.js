import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useApiService } from '../services/api';

const Games = () => {
  const auth = useAuth();
  const apiService = useApiService();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [loading, setLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const courses = [
    {
      id: 'CS149',
      name: 'CS-149: Programming Fundamentals',
      description: 'Basic programming concepts and problem solving',
      type: 'coding',
      color: 'bg-blue-500'
    },
    {
      id: 'IT215',
      name: 'IT-215: Network Administration',
      description: 'Subnetting, IP addressing, and network configuration',
      type: 'networking',
      color: 'bg-green-500'
    },
    {
      id: 'CS240',
      name: 'CS-240: Algorithms & Data Structures',
      description: 'Algorithm analysis and data structure implementation',
      type: 'algorithms',
      color: 'bg-purple-500'
    },
    {
      id: 'IT244',
      name: 'IT-244: Database Design',
      description: 'SQL queries and database design principles',
      type: 'database',
      color: 'bg-red-500'
    },
    {
      id: 'CS345',
      name: 'CS-345: Software Engineering',
      description: 'Design patterns and software architecture',
      type: 'software-engineering',
      color: 'bg-yellow-500'
    }
  ];

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    try {
      const response = await apiService.get('/games/leaderboard');
      setLeaderboard(response.leaderboard || []);
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
    }
  };

  const startQuiz = async (course) => {
    setSelectedCourse(course);
    setScore(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    await getNextQuestion(course);
  };

  const getNextQuestion = async (course) => {
    setLoading(true);
    try {
      const response = await apiService.post('/games/question', {
        courseId: course.id,
        courseType: course.type
      });
      setCurrentQuestion(response.question);
      setUserAnswer('');
      setFeedback(null);
    } catch (error) {
      console.error('Failed to get question:', error);
      setFeedback({ type: 'error', message: 'Failed to load question. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim()) return;
    
    setLoading(true);
    try {
      const response = await apiService.post('/games/submit', {
        questionId: currentQuestion.id,
        answer: userAnswer,
        courseId: selectedCourse.id
      });
      
      setFeedback(response.feedback);
      if (response.correct) {
        setScore(score + response.points);
      }
      setQuestionsAnswered(questionsAnswered + 1);
      
      // Auto-advance after 3 seconds
      setTimeout(() => {
        if (questionsAnswered < 4) { // 5 questions per quiz
          getNextQuestion(selectedCourse);
        } else {
          finishQuiz();
        }
      }, 3000);
      
    } catch (error) {
      console.error('Failed to submit answer:', error);
      setFeedback({ type: 'error', message: 'Failed to submit answer. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const finishQuiz = async () => {
    try {
      await apiService.post('/games/finish', {
        courseId: selectedCourse.id,
        score: score,
        questionsAnswered: questionsAnswered + 1
      });
      loadLeaderboard();
    } catch (error) {
      console.error('Failed to save quiz results:', error);
    }
  };

  const resetQuiz = () => {
    setSelectedCourse(null);
    setCurrentQuestion(null);
    setUserAnswer('');
    setFeedback(null);
    setScore(0);
    setQuestionsAnswered(0);
  };

  if (!auth.isAuthenticated) {
    return (
      <div className="jmu-container py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-jmuPurple mb-4">Learning Games</h1>
          <p className="text-gray-600 mb-8">Please sign in to access the learning games.</p>
          <button
            onClick={() => auth.signinRedirect()}
            className="bg-jmuPurple text-white px-6 py-3 rounded-lg hover:bg-jmuDarkPurple transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  if (selectedCourse && currentQuestion) {
    return (
      <div className="jmu-container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-jmuPurple">{selectedCourse.name}</h2>
              <button
                onClick={resetQuiz}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to Courses
              </button>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Question {questionsAnswered + 1} of 5</span>
              <span>Score: {score} points</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-jmuPurple h-2 rounded-full transition-all duration-300"
                style={{ width: `${((questionsAnswered + 1) / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{currentQuestion.title}</h3>
            <p className="text-gray-700 mb-6">{currentQuestion.description}</p>
            
            {currentQuestion.code && (
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm">
                <pre>{currentQuestion.code}</pre>
              </div>
            )}

            {currentQuestion.type === 'multiple-choice' ? (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={userAnswer === option}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="text-jmuPurple"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder={currentQuestion.placeholder || "Enter your answer..."}
                className="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm"
                rows={currentQuestion.type === 'coding' ? 10 : 4}
              />
            )}

            {feedback && (
              <div className={`mt-4 p-4 rounded-lg ${
                feedback.type === 'correct' ? 'bg-green-100 text-green-800' :
                feedback.type === 'incorrect' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                <p className="font-semibold">{feedback.message}</p>
                {feedback.explanation && (
                  <p className="mt-2 text-sm">{feedback.explanation}</p>
                )}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <div></div>
              <button
                onClick={submitAnswer}
                disabled={!userAnswer.trim() || loading || feedback}
                className="bg-jmuPurple text-white px-6 py-2 rounded-lg hover:bg-jmuDarkPurple disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Checking...' : 'Submit Answer'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jmu-container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-jmuPurple mb-4">Learning Games</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Test your knowledge with interactive quizzes and coding challenges. 
          Choose a course and start practicing!
        </p>
      </div>

      {/* Course Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`${course.color} h-2`}></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-jmuPurple mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                onClick={() => startQuiz(course)}
                className="w-full bg-jmuPurple text-white py-2 px-4 rounded-lg hover:bg-jmuDarkPurple transition-colors"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      {leaderboard.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-jmuPurple mb-6">Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Rank</th>
                  <th className="text-left py-2">Player</th>
                  <th className="text-left py-2">Course</th>
                  <th className="text-left py-2">Score</th>
                  <th className="text-left py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.slice(0, 10).map((entry, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">#{index + 1}</td>
                    <td className="py-2">{entry.playerName}</td>
                    <td className="py-2">{entry.courseName}</td>
                    <td className="py-2 font-semibold">{entry.score}</td>
                    <td className="py-2 text-gray-600">{new Date(entry.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;