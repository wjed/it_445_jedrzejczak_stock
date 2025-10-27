import React from 'react';

const CSStaff = () => {
  return (
    <div className="bg-csLightGold min-h-screen">
      <div className="jmu-container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-csSlateGray mb-4">Computer Science Faculty & Staff</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated faculty and staff supporting CS students at JMU
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-csTeal rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            The CS faculty directory is being compiled. This section will include contact information, 
            office hours, and specializations for all Computer Science department members.
          </p>
          <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
            <p className="text-csTeal font-medium">
              <strong>TBD:</strong> Faculty profiles, contact information, and office hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSStaff;