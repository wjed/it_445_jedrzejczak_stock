import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="jmu-container py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-jmuPurple mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-jmuPurple text-white px-6 py-3 rounded-lg hover:bg-jmuDarkPurple transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;