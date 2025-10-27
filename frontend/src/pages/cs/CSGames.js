import React from 'react';

const CSGames = () => {
  return (
    <div className="bg-csLightGold min-h-screen">
      <div className="jmu-container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-csSlateGray mb-4">CS Learning Games</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice programming concepts and computer science fundamentals through interactive challenges
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-csTeal rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            Interactive CS learning games are in development. These will include coding challenges, 
            algorithm visualizations, and computer science concept quizzes.
          </p>
          <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
            <p className="text-csTeal font-medium">
              <strong>TBD:</strong> Programming challenges and CS concept games
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSGames;