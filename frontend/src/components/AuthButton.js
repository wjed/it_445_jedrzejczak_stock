import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const AuthButton = ({ csTheme = false }) => {
  const auth = useAuth();

  const handleSignOut = () => {
    // Simple and reliable logout - just remove the user locally
    // This avoids Cognito logout URL configuration issues
    auth.removeUser();
    // Redirect to home page
    window.location.href = '/';
  };

  if (auth.isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="text-red-300 text-sm">
        Auth Error: {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated) {
    const userInitial = (auth.user?.profile?.given_name || auth.user?.profile?.email || 'U')[0].toUpperCase();
    
    return (
      <div className="flex items-center space-x-3">
        <Link 
          to={csTheme ? "/cs/account" : "/account"}
          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-200 ${
            csTheme 
              ? 'bg-csIceBlue text-csSlateGray hover:bg-csTeal hover:text-white' 
              : 'bg-jmuGold text-jmuPurple hover:bg-jmuDarkGold'
          }`}
          title="Account Settings"
        >
          {userInitial}
        </Link>
        <button
          onClick={handleSignOut}
          className={`text-sm bg-transparent border text-white px-3 py-1 rounded transition-colors duration-200 ${
            csTheme
              ? 'border-white hover:bg-csIceBlue hover:text-csSlateGray'
              : 'border-white hover:bg-white hover:text-jmuPurple'
          }`}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => auth.signinRedirect()}
        className={`text-sm font-semibold px-4 py-2 rounded transition-colors duration-200 ${
          csTheme
            ? 'bg-csIceBlue hover:bg-csTeal text-csSlateGray hover:text-white'
            : 'bg-jmuGold hover:bg-jmuDarkGold text-jmuPurple'
        }`}
      >
        Sign In
      </button>
    </div>
  );
};

export default AuthButton;