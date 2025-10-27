# Cognito Setup Instructions - Back to us-east-1

This document contains the setup instructions for AWS Cognito authentication in the JMU IT Advisor application.

## Current Configuration (Updated October 27, 2025)

The application is back in **us-east-1** region with the original Cognito setup and a new knowledge base.

### User Pool Details (Original)
- **User Pool ID**: `us-east-1_hmo1NV9TO`
- **Client ID**: `1n94am2jirka95privfedg42tu`
- **Region**: `us-east-1`
- **Domain**: `https://us-east-1hmo1nv9to.auth.us-east-1.amazoncognito.com`
- **Authority**: `https://cognito-idp.us-east-1.amazonaws.com/us-east-1_hmo1NV9TO`

### Authentication Flow
The application uses the Authorization Code Grant flow with PKCE for secure authentication.

## Frontend Configuration

The frontend is configured in `src/config/auth.js` with the following settings:

```javascript
export const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_hmo1NV9TO",
  client_id: "1n94am2jirka95privfedg42tu",
  redirect_uri: window.location.origin + "/",
  post_logout_redirect_uri: window.location.origin + "/",
  response_type: "code",
  scope: "email openid phone",
  automaticSilentRenew: true,
  loadUserInfo: true,
};
```

## Backend Integration

The Lambda function validates JWT tokens from Cognito and extracts user information for API requests. The Lambda is deployed in us-east-1 and configured with the original user pool ID.

## Application URLs

- **Website**: https://dia5bbocf1z3p.cloudfront.net
- **API**: https://zbp7knav5a.execute-api.us-east-1.amazonaws.com/prod/
- **Cognito Domain**: https://us-east-1hmo1nv9to.auth.us-east-1.amazoncognito.com

## Testing the Complete Flow

1. Navigate to https://dia5bbocf1z3p.cloudfront.net
2. Click "Sign In" and use your existing Cognito credentials
3. Navigate to the Chat page
4. Ask questions like "What are the IT major requirements?"
5. The AI should respond using the Bedrock knowledge base

## Bedrock Knowledge Base Integration (NEW)

- **Knowledge Base ID**: `ISOPKENVXJ`
- **Knowledge Base Name**: `jmu-it-kb-pdf`
- **Region**: `us-east-1`
- **Model**: Claude 3 Sonnet
- **Status**: Active and integrated with chat functionality
- **Created**: October 27, 2025

## User Management

Users can be managed through the AWS Cognito console in us-east-1 region or via AWS CLI commands. Use your existing Cognito user accounts.

## Security Notes

- The application uses secure authentication flows
- JWT tokens are validated on the backend
- User sessions are managed automatically
- Logout properly clears all authentication state
- All resources are consistently deployed in us-east-1

## What's Working Now

✅ **Original Cognito authentication** - Use your existing accounts
✅ **New knowledge base in us-east-1** - Fresh PDF data about IT major
✅ **Chat functionality** - AI responses powered by Claude 3 Sonnet
✅ **All resources in same region** - No cross-region complexity
✅ **Simplified deployment** - Everything back in us-east-1

The chat now provides detailed, accurate information about JMU IT major requirements, courses, and policies directly from the uploaded PDF documents.