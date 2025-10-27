
# JMU Dual Academic Advisor Bot

A comprehensive dual-portal academic advising platform for James Madison University, featuring separate interfaces for Information Technology and Computer Science programs with AI-powered assistance, interactive learning games, and complete curriculum management.

## 🎯 Project Overview

This capstone project creates an intelligent academic advising system that serves both IT and CS students at JMU. The platform features two distinct portals with shared authentication, each tailored to their respective program requirements and visual identity.

### Key Features
- **Dual Portal Architecture**: Separate IT and CS advising interfaces
- **AI-Powered Chat**: Bedrock-integrated knowledge base for instant answers
- **Interactive Learning Games**: Course-specific quizzes and coding challenges
- **Comprehensive Curriculum**: Complete course catalogs with prerequisites
- **Schedule Planning**: Academic planning tools and degree tracking
- **Secure Authentication**: AWS Cognito integration with JWT validation

## 🏗️ Architecture

### Frontend (React)
```
frontend/
├── src/
│   ├── components/          # Shared UI components
│   │   ├── Header.js        # IT portal navigation
│   │   ├── CSHeader.js      # CS portal navigation
│   │   ├── AuthButton.js    # Authentication component
│   │   ├── MainLayout.js    # IT portal layout wrapper
│   │   └── CSLayout.js      # CS portal layout wrapper
│   ├── pages/               # IT portal pages
│   │   ├── Home.js          # IT landing page
│   │   ├── Courses.js       # IT course catalog
│   │   ├── Chat.js          # AI chat interface
│   │   ├── Games.js         # Learning games platform
│   │   └── ...
│   ├── pages/cs/            # CS portal pages
│   │   ├── CSHome.js        # CS landing page
│   │   ├── CSCourses.js     # CS curriculum with filters
│   │   └── ...
│   ├── services/
│   │   └── api.js           # API service layer
│   └── config/
│       └── auth.js          # Cognito configuration
```

### Backend (AWS CDK + Lambda)
```
capstone_2/
├── capstone_2_stack.py      # Main CDK infrastructure
├── lambda/
│   └── games_handler.py     # Lambda function code
└── app.py                   # CDK app entry point
```

### Infrastructure Components
- **AWS Lambda**: API backend with Bedrock integration
- **Amazon DynamoDB**: Data storage (profiles, games, leaderboard)
- **AWS Cognito**: User authentication and management
- **Amazon Bedrock**: AI knowledge base for chat functionality
- **CloudFront + S3**: Static website hosting and CDN
- **API Gateway**: RESTful API endpoints

## 🎨 Design System

### IT Portal Theme
- **Primary**: JMU Purple (#450084)
- **Accent**: JMU Gold (#CBB677)
- **Typography**: Alliance No.2 font family

### CS Portal Theme
- **Primary**: Slate Gray (#333333)
- **Accent**: Ice Blue (#8EE4D7)
- **Secondary**: Teal (#009698)
- **Background**: Light Gold (#F4EFE1)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- AWS CLI configured
- AWS CDK v2 installed

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Capstone_2
```

2. **Setup Python environment**
```bash
python -m venv .venv
# Windows
.venv\Scripts\activate.bat
# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
```

4. **Configure environment**
- Update `frontend/src/config/auth.js` with your Cognito settings
- Ensure AWS credentials are configured

### Development

1. **Build frontend**
```bash
cd frontend
npm run build
```

2. **Deploy infrastructure**
```bash
cdk deploy --require-approval never
```

3. **Invalidate CloudFront cache**
```bash
aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*"
```

## 📁 Project Structure

### Frontend Architecture

#### Routing System
The application uses React Router with a dual-layout system:
- **IT Routes** (`/`): Use `MainLayout` with IT theming
- **CS Routes** (`/cs/*`): Use `CSLayout` with CS theming

#### Component Hierarchy
```
App.js
├── MainLayout (IT Portal)
│   ├── Header (IT Navigation)
│   ├── Pages (Home, Courses, Chat, etc.)
│   └── Footer (IT Theme)
└── CSLayout (CS Portal)
    ├── CSHeader (CS Navigation)
    ├── CS Pages (CSHome, CSCourses, etc.)
    └── Footer (CS Theme)
```

#### Authentication Flow
1. **OIDC Integration**: Uses `react-oidc-context` for Cognito
2. **Token Management**: Automatic refresh and storage
3. **Protected Routes**: JWT validation on API calls
4. **Dual Theme Support**: AuthButton adapts to portal theme

### Backend Architecture

#### Lambda Function (`lambda/games_handler.py`)
Handles all API endpoints:
- **Authentication**: JWT token validation
- **Chat**: Bedrock knowledge base queries
- **Games**: Question generation and scoring
- **Profiles**: User data management
- **Leaderboards**: Game score tracking

#### DynamoDB Tables
- **DataTable**: General application data and chat history
- **ProfilesTable**: User profile information
- **GamesTable**: Quiz questions and answers
- **LeaderboardTable**: Game scores and rankings

#### Bedrock Integration
- **Knowledge Base ID**: `ISOPKENVXJ`
- **Model**: Claude 3 Sonnet
- **Purpose**: IT program information and student guidance

### CDK Infrastructure (`capstone_2_stack.py`)

#### Resources Created
1. **S3 Bucket**: Static website hosting
2. **CloudFront Distribution**: Global CDN with custom error pages
3. **Lambda Function**: API backend with environment variables
4. **API Gateway**: RESTful endpoints with CORS
5. **DynamoDB Tables**: Data persistence layer
6. **IAM Roles**: Least-privilege access policies

#### Environment Variables
```python
{
    "USER_POOL_ID": "us-east-1_hmo1NV9TO",
    "TABLE_NAME": table.table_name,
    "PROFILES_TABLE_NAME": profiles_table.table_name,
    "GAMES_TABLE_NAME": games_table.table_name,
    "LEADERBOARD_TABLE_NAME": leaderboard_table.table_name,
    "KNOWLEDGE_BASE_ID": "ISOPKENVXJ"
}
```

## 🎮 Features Deep Dive

### Learning Games System
- **Dynamic Question Generation**: AI-powered using Bedrock
- **Course-Specific Content**: Tailored to IT/CS curricula
- **Multiple Question Types**: Coding, multiple choice, text input
- **Real-time Scoring**: Instant feedback and explanations
- **Leaderboards**: Competitive rankings across courses

### AI Chat Assistant
- **Knowledge Base**: Trained on IT program information
- **Context Awareness**: Maintains conversation history
- **Instant Responses**: Sub-second query processing
- **Fallback Handling**: Graceful error management

### Curriculum Management
- **Complete Course Catalogs**: IT and CS program requirements
- **Interactive Filtering**: By year, category, prerequisites
- **Prerequisite Tracking**: Visual dependency mapping
- **Credit Calculations**: Automatic degree progress

## 🔐 Security

### Authentication
- **AWS Cognito**: Enterprise-grade user management
- **JWT Tokens**: Secure API authentication
- **Automatic Refresh**: Seamless session management
- **HTTPS Only**: All traffic encrypted in transit

### Authorization
- **Protected Endpoints**: User authentication required
- **Token Validation**: Server-side JWT verification
- **Role-Based Access**: Future extensibility for admin roles

## 🌐 Deployment

### Production URLs
- **IT Portal**: https://dia5bbocf1z3p.cloudfront.net
- **CS Portal**: https://dia5bbocf1z3p.cloudfront.net/cs
- **API**: https://zbp7knav5a.execute-api.us-east-1.amazonaws.com/prod/

### CI/CD Process
1. **Build**: `npm run build` creates optimized React bundle
2. **Deploy**: `cdk deploy` updates AWS infrastructure
3. **Invalidate**: CloudFront cache refresh for immediate updates

## 👥 Team

**Capstone Project Team**
- **Will Jedrzejczak** - Developer
- **Brian Stock** - Developer
- **Professor Livia Griffith** - Faculty Advisor

**Academic Context**
- James Madison University
- Information Technology Major
- Capstone Project 2025

## 📞 Support

### Academic Advising Contacts
- **IT Program**: Ellen Hedrick (hedricme@jmu.edu)
- **CS Program**: Computer Science Department

### Technical Support
This is a student capstone project. For technical issues, contact the development team through the JMU IT department.

## 📄 License

This project is developed as a student capstone project at James Madison University. All rights reserved.

---

*This platform serves as a comprehensive academic planning tool. Please confirm all course selections with your academic advisor before registration.*
