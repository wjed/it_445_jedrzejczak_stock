import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import ChatInterface from '../components/ChatInterface';

const Chat = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Advisor Chat
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Get instant answers about the IT major. This is a planning tool, not official academic advising.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="jmu-section">
        <div className="jmu-container">
          <div className="bg-white rounded-lg shadow-md p-8 lg:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-jmuPurple rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                💬
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                AI-Powered Academic Guidance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get instant answers to common questions about degree requirements, course planning, 
                and academic policies available 24/7.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="mb-8">
              <ChatInterface />
            </div>

            {/* Common Topics */}
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6 text-center">
                Common Questions We'll Help With
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Course Requirements</h4>
                  <p className="text-gray-600 text-sm">Prerequisites, credit hours, course sequences</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Graduation Planning</h4>
                  <p className="text-gray-600 text-sm">Degree requirements, timeline, capstone info</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Academic Policies</h4>
                  <p className="text-gray-600 text-sm">Registration, transfers, academic standing</p>
                </div>
              </div>
            </div>

            {/* Important Disclaimers */}
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-semibold text-red-800 mb-2">Important Limitation</h4>
                    <p className="text-red-700 text-sm">
                      This chat assistant provides general guidance only. For official academic advising, 
                      course overrides, degree audits, or registration assistance, please contact your assigned academic advisor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-lightGold border border-jmuGold rounded-lg p-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-semibold text-jmuPurple mb-2">Academic Verification Required</h4>
                    <p className="text-gray-700 text-sm">
                      Always verify important academic decisions and course selections with your official academic advisor 
                      before making registration or degree planning commitments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </ProtectedRoute>
  );
};

export default Chat;