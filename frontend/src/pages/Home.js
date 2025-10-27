import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Course Explorer',
      description: 'Browse IT 160, IT 215, IT 333, and other core courses. Learn about prerequisites, credit hours, and course descriptions to make informed decisions about your academic path.',
      icon: (
        <div className="w-16 h-16 bg-jmuPurple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
          IT
        </div>
      )
    },
    {
      title: 'Schedule Builder',
      description: 'Plan your entire degree timeline semester by semester. Visualize your path to graduation with prerequisite validation and credit hour tracking.',
      icon: (
        <div className="w-16 h-16 bg-jmuGold rounded-full flex items-center justify-center text-jmuPurple text-2xl font-bold mx-auto mb-4">
          📅
        </div>
      )
    },
    {
      title: 'Advisor Chat',
      description: 'Get instant answers to common questions about degree requirements, course planning, and academic policies. Available 24/7 for guidance.',
      icon: (
        <div className="w-16 h-16 bg-jmuPurple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
          💬
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - JMU Style */}
      <section className="bg-jmuPurple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jmuPurple to-purple-900 opacity-90"></div>
        <div className="relative jmu-container py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Plan Your JMU IT Major with Confidence
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Explore courses, map out semesters, and get guidance before you meet with your academic advisor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses" className="jmu-btn-primary text-lg px-10 py-4">
                Explore Courses
              </Link>
              <Link to="/schedule" className="jmu-btn-secondary text-lg px-10 py-4">
                Build My Schedule
              </Link>
              <Link to="/staff" className="jmu-btn-secondary text-lg px-10 py-4">
                Meet Faculty
              </Link>
              <Link to="/chat" className="jmu-btn-secondary text-lg px-10 py-4">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Section - JMU Style */}
      <section className="jmu-section bg-white">
        <div className="jmu-container text-center">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Everything You Need to Plan Your IT Degree
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of planning tools helps you navigate the Information Technology major requirements, 
            understand course sequences, and make informed decisions about your academic journey at James Madison University.
          </p>
        </div>
      </section>

      {/* Feature Grid - JMU Style */}
      <section className="jmu-section bg-jmuOffWhite">
        <div className="jmu-container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
                {feature.icon}
                <div className="h-1 bg-jmuGold w-16 mx-auto mb-6 rounded"></div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence Section */}
      <section className="jmu-section bg-white">
        <div className="jmu-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
              Learn from Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our IT program faculty bring world-class expertise from leading universities and top technology companies, 
              ensuring you receive education that's both academically rigorous and industry-relevant.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-jmuPurple to-purple-800 text-white rounded-lg p-6 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                <img src="/el-tawab.jpg" alt="Dr. Samy El-Tawab" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Dr. Samy El-Tawab</h3>
              <p className="text-jmuGold text-sm mb-2">Program Director</p>
              <p className="text-xs text-gray-100">IoT, Network Security, Intelligent Transportation</p>
            </div>
            
            <div className="bg-gradient-to-br from-jmuGold to-yellow-600 text-jmuPurple rounded-lg p-6 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                <img src="/salib.jpg" alt="Dr. Emil Salib" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Dr. Emil Salib</h3>
              <p className="text-purple-800 text-sm mb-2">Professor</p>
              <p className="text-xs text-purple-700">Cloud Computing, DevOps, Networking</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg p-6 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                <img src="/hedrick.jpg" alt="Ellen Hedrick" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Ellen Hedrick</h3>
              <p className="text-jmuGold text-sm mb-2">Academic Advisor</p>
              <p className="text-xs text-gray-100">Student Success, Career Planning</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/staff" className="jmu-btn-outline text-lg px-8 py-3">
              Meet All Faculty & Staff
            </Link>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="jmu-section bg-jmuOffWhite">
        <div className="jmu-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Built for JMU IT Students
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This capstone project was developed specifically for James Madison University's Information Technology program, 
                incorporating the latest curriculum requirements and course offerings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Current course catalog and prerequisite information</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Integration with JMU academic policies and procedures</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">Designed with input from academic advisors</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-jmuPurple to-purple-900 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-heading font-semibold mb-4">Student Success</h3>
              <p className="text-gray-100 mb-6">
                "This tool helped me understand my degree requirements and plan my course sequence effectively. 
                I felt much more prepared when I met with my advisor."
              </p>
              <div className="text-jmuGold font-medium">— JMU IT Student</div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section - JMU Style */}
      <section className="bg-lightGold border-t-4 border-jmuGold py-8">
        <div className="jmu-container">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-jmuPurple">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-jmuPurple rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Important Academic Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is a student-built capstone project created under Professor Livia Griffith. 
                  While this tool provides helpful planning guidance, please confirm all course selections 
                  and degree requirements with your assigned academic advisor before registering for classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;