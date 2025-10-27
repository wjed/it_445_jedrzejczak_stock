import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Contact Advising
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Connect with academic advising and department resources for official guidance and support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="jmu-section">
        <div className="jmu-container">
          <div className="bg-white rounded-lg shadow-md p-8 lg:p-12 max-w-5xl mx-auto">
            
            {/* Featured Faculty Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Your IT Program Team
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-jmuPurple to-purple-800 text-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
                    <img 
                      src="/hedrick.jpg" 
                      alt="Ellen Hedrick" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Ellen Hedrick</h3>
                  <p className="text-jmuGold mb-2">Academic Advisor & Outreach Coordinator</p>
                  <p className="text-sm text-gray-100">Your go-to person for course planning, registration, and degree requirements</p>
                </div>
                <div className="bg-gradient-to-br from-jmuGold to-yellow-600 text-jmuPurple rounded-lg p-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
                    <img 
                      src="/el-tawab.jpg" 
                      alt="Dr. Samy El-Tawab" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Dr. Samy El-Tawab</h3>
                  <p className="text-purple-800 mb-2">Program Director & Professor</p>
                  <p className="text-sm text-purple-700">Program leadership, research opportunities, and industry connections</p>
                </div>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Academic Advising */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6 border-4 border-jmuPurple shadow-lg">
                  <img 
                    src="/hedrick.jpg" 
                    alt="Ellen Hedrick" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  Academic Advising
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-1">Ellen Hedrick</p>
                    <p className="text-sm text-gray-600 mb-2">Advisor and Outreach Coordinator</p>
                    <p className="text-sm text-gray-600">Information Technology Program</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Email:</span> hedricme@jmu.edu</p>
                    <p><span className="font-medium">Schedule:</span> <a href="#" className="text-jmuPurple hover:underline">Book Meeting</a></p>
                    <p className="text-xs text-gray-500">In-person and virtual options available</p>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-xs text-blue-800">
                      <span className="font-medium">Experience:</span> IT Academic Advisor since 2023, 
                      former Assistant Director of Undergraduate Admissions
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Director */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6 border-4 border-jmuGold shadow-lg">
                  <img 
                    src="/el-tawab.jpg" 
                    alt="Dr. Samy El-Tawab" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  Program Director
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-1">Dr. Samy El-Tawab</p>
                    <p className="text-sm text-gray-600 mb-2">Director and Professor</p>
                    <p className="text-sm text-gray-600">Information Technology Program</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Email:</span> eltawass@jmu.edu</p>
                    <p><span className="font-medium">Office:</span> King Hall</p>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-xs text-purple-800">
                      <span className="font-medium">Research:</span> IoT, Network Security, 
                      Intelligent Transportation, Mobile Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Department Contact */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-jmuPurple rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto lg:mx-0 mb-6">
                  🏢
                </div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  Department Office
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-1">Computer Science Department</p>
                    <p className="text-sm text-gray-600">College of Integrated Science and Engineering</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Location:</span> King Hall, MSC 4103</p>
                    <p><span className="font-medium">Address:</span><br />
                      701 Carrier Drive<br />
                      Harrisonburg, VA 22807
                    </p>
                    <p><span className="font-medium">Phone:</span> (540) 568-6035</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Program Information */}
            <div className="bg-gradient-to-r from-jmuPurple to-purple-800 text-white rounded-lg p-8 mb-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Information Technology Program at JMU
                </h3>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  The IT program launched in Fall 2020 under the direction of Dr. Samy El-Tawab. 
                  Our curriculum combines theoretical foundations with hands-on experience in networking, 
                  cybersecurity, database administration, and emerging technologies.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-jmuGold text-2xl font-bold">2020</div>
                    <div className="text-sm">Program Launch</div>
                  </div>
                  <div>
                    <div className="text-jmuGold text-2xl font-bold">120+</div>
                    <div className="text-sm">Credit Hours</div>
                  </div>
                  <div>
                    <div className="text-jmuGold text-2xl font-bold">17</div>
                    <div className="text-sm">Core IT Courses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Contact Section */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-xl font-heading font-semibold text-blue-900 mb-4">
                Who to Contact and When
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-jmuPurple rounded-full flex items-center justify-center text-white text-xs mr-2">E</span>
                    Contact Ellen Hedrick (Academic Advisor)
                  </h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Course registration and scheduling questions</li>
                    <li>• Degree audit and graduation planning</li>
                    <li>• Course substitutions and transfer credit evaluation</li>
                    <li>• Override requests for closed courses</li>
                    <li>• Academic difficulty or probation issues</li>
                    <li>• Major or minor changes</li>
                    <li>• First-generation student support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-jmuGold rounded-full flex items-center justify-center text-jmuPurple text-xs mr-2">D</span>
                    Contact Dr. El-Tawab (Program Director)
                  </h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Program-level questions and concerns</li>
                    <li>• Research opportunities and guidance</li>
                    <li>• Industry connections and internships</li>
                    <li>• Graduate school recommendations</li>
                    <li>• Capstone project supervision</li>
                    <li>• Career pathway discussions</li>
                    <li>• Technical specialization advice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Faculty Expertise */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Faculty Expertise and Course Offerings
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Dr. El-Tawab's Research Areas</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">IoT</span>
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">Network Security</span>
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">Mobile Development</span>
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">Cloud Computing</span>
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">Intelligent Transportation</span>
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full text-xs">Wireless Networks</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key IT Courses Taught</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• IT 160 - Data Structures and Advanced Programming</li>
                    <li>• IT 215 - Telecommunications and Computer Networking</li>
                    <li>• IT 311 - Operating System Administration</li>
                    <li>• IT 480 - Autonomous Vehicles</li>
                    <li>• Various graduate-level research courses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Communication Guidelines */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-jmuPurple rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  📧
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Email First</h4>
                <p className="text-gray-600 text-sm">
                  Send detailed questions via email for the most efficient response from both advisors
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-jmuGold rounded-full flex items-center justify-center text-jmuPurple text-xl font-bold mx-auto mb-4">
                  📅
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Schedule Meetings</h4>
                <p className="text-gray-600 text-sm">
                  Ellen offers both in-person and virtual appointments for academic planning
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-jmuPurple rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  🆘
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Urgent Issues</h4>
                <p className="text-gray-600 text-sm">
                  Call the department office for time-sensitive registration or academic problems
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-lightGold border border-jmuGold rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-heading font-semibold text-jmuPurple mb-2">Official Academic Guidance Required</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    This planning tool provides helpful guidance, but cannot replace official academic advising. 
                    Contact Ellen Hedrick (hedricme@jmu.edu) for all official academic matters, or Dr. El-Tawab (eltawass@jmu.edu) for program-level questions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="font-medium text-jmuPurple mb-2">Ellen Hedrick handles:</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Course registration and overrides</li>
                        <li>• Degree audits and graduation clearance</li>
                        <li>• Transfer credit evaluations</li>
                        <li>• Academic standing issues</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-jmuPurple mb-2">Dr. El-Tawab handles:</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Program direction and policy</li>
                        <li>• Research opportunities</li>
                        <li>• Industry connections</li>
                        <li>• Graduate school guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;