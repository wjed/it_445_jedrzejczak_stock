import React from 'react';

const CSFAQ = () => {
  return (
    <div className="bg-csLightGold min-h-screen">
      <div className="jmu-container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-csSlateGray mb-4">CS Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about the Computer Science program at JMU
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-csTeal rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            The CS FAQ section is being compiled with common questions about degree requirements, 
            course sequences, and program policies.
          </p>
          <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
            <p className="text-csTeal font-medium">
              <strong>TBD:</strong> Comprehensive FAQ about CS program requirements and policies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSFAQ;