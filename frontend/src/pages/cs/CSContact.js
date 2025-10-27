import React from 'react';

const CSContact = () => {
  return (
    <div className="bg-csLightGold min-h-screen">
      <div className="jmu-container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-csSlateGray mb-4">Contact CS Advising</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Computer Science advisors and department staff
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-csTeal rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            CS department contact information and advising resources are being compiled. 
            This section will include advisor contact details and office hours.
          </p>
          <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
            <p className="text-csTeal font-medium">
              <strong>TBD:</strong> CS advisor contact information and appointment scheduling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSContact;