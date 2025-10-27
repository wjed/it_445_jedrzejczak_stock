import React from 'react';
import { useAuth } from 'react-oidc-context';

const ProtectedRoute = ({ children, fallback = null }) => {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jmuPurple mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Authentication Error</h2>
            <p className="text-red-600 mb-4">{auth.error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="jmu-btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    if (fallback) {
      return fallback;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-jmuOffWhite">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-jmuPurple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              🔒
            </div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Sign In Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access this feature of the JMU IT Advisor Bot.
            </p>
            <button
              onClick={() => auth.signinRedirect()}
              className="jmu-btn-primary w-full"
            >
              Sign In to Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;