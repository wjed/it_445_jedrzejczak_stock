import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const CSHome = () => {
  const auth = useAuth();

  return (
    <div className="bg-csLightGold">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-csSlateGray via-csTeal to-csSlateGray text-white">
        <div className="jmu-container py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Welcome to the
              <span className="block text-csIceBlue">CS Advisor Bot</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Your comprehensive planning companion for Computer Science at James Madison University
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {auth.isAuthenticated ? (
                <>
                  <Link
                    to="/cs/chat"
                    className="bg-csIceBlue hover:bg-csTeal text-csSlateGray font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                  >
                    Start Planning
                  </Link>
                  <Link
                    to="/cs/courses"
                    className="border-2 border-csIceBlue text-csIceBlue hover:bg-csIceBlue hover:text-csSlateGray font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                  >
                    View Courses
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => auth.signinRedirect()}
                  className="bg-csIceBlue hover:bg-csTeal text-csSlateGray font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Sign In to Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="jmu-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-csSlateGray mb-4">
              Everything You Need for CS Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate your Computer Science journey with confidence using our comprehensive planning tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">Course Planning</h3>
              <p className="text-gray-600">
                Explore CS courses, prerequisites, and plan your academic path with detailed course information.
              </p>
            </div>

            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">Schedule Builder</h3>
              <p className="text-gray-600">
                Create and manage your semester schedules with our intuitive planning interface.
              </p>
            </div>

            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">AI Assistant</h3>
              <p className="text-gray-600">
                Get instant answers about CS requirements, courses, and academic policies from our AI chatbot.
              </p>
            </div>

            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">Learning Games</h3>
              <p className="text-gray-600">
                Practice programming concepts and CS fundamentals with interactive coding challenges.
              </p>
            </div>

            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">Faculty Directory</h3>
              <p className="text-gray-600">
                Connect with CS faculty members, advisors, and staff for academic guidance and support.
              </p>
            </div>

            <div className="bg-csLightGold rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-csTeal rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-csSlateGray mb-3">FAQ & Resources</h3>
              <p className="text-gray-600">
                Find answers to common questions and access important CS program resources and policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-csTeal to-csSlateGray text-white py-20">
        <div className="jmu-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your CS Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join fellow Computer Science students in planning your path to success at JMU
          </p>
          {auth.isAuthenticated ? (
            <Link
              to="/cs/chat"
              className="bg-csIceBlue hover:bg-white text-csSlateGray font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg inline-block"
            >
              Start Planning Now
            </Link>
          ) : (
            <button
              onClick={() => auth.signinRedirect()}
              className="bg-csIceBlue hover:bg-white text-csSlateGray font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Sign In to Begin
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CSHome;