import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: 'program',
      question: 'What is the Information Technology major at JMU?',
      answer: 'The B.S. in Information Technology focuses on highly relevant skills in cybersecurity, computer networking, and end-user design and development. We go beyond the science behind computers, teaching you how to design, develop, test and maintain solutions in a wide range of computing and networking application areas. The program integrates IT studies to provide knowledge and skills to meet the computer technology needs of business, government, healthcare, education and other organizations.'
    },
    {
      id: 2,
      category: 'requirements',
      question: 'What are the progression requirements for the IT major?',
      answer: 'To progress in the major, you must: (1) Achieve a minimum grade of "B-" in CS 149 to advance to IT 160 and IT 201, (2) Achieve a minimum grade of "C" in IT 160, IT 201, and IT 215, (3) Achieve a minimum grade of "C-" in IT 333. Students may attempt CS 149 twice, and transfer students must complete an assessment to determine preparedness.'
    },
    {
      id: 3,
      category: 'requirements',
      question: 'How many credit hours are required for the IT major?',
      answer: 'The IT major requires 53-56 credit hours total: 42 credit hours of core courses, 4-6 credit hours for calculus, 3-4 credit hours for statistics, 4 credit hours for capstone (IT 444 + IT 445), and 9 credit hours of IT electives. The total degree requires 120 credit hours including general education and university electives.'
    },
    {
      id: 4,
      category: 'courses',
      question: 'What math courses do I need to take?',
      answer: 'You have two calculus options: (1) MATH 235 (Calculus I) - 4 credits, or (2) MATH 231 + MATH 232 (Calculus with Functions I & II) - 6 credits total. For statistics, choose from: MATH 220 (Elementary Statistics) - 3 credits, MATH 229 (Applied Statistics Using R) - 3 credits, or MATH 318 (Probability and Statistics) - 4 credits. Many students choose MATH 231/232 and MATH 220.'
    },
    {
      id: 5,
      category: 'courses',
      question: 'What are the core IT courses I need to take?',
      answer: 'Core courses include: CS 149 (Programming), IT 160 (Data Structures), IT 201 (Computational Logic), IT 203 (Security & Privacy), IT 212 (Digital Electronics), IT 215 (Networking), IT 240 (Database Admin), IT 301 (Web Technologies), IT 302 (Ethics), IT 311 (Operating Systems), IT 313 (Community Projects), IT 333 (Advanced Networking), IT 340 (Data Science & ML), and IT 347 (Interactive Computing).'
    },
    {
      id: 6,
      category: 'electives',
      question: 'What IT electives can I choose from?',
      answer: 'You must select 9 credit hours from: IT 334 (Cyber Crime & Forensics), IT 341 (Mobile Applications), IT 342 (Server Administration), IT 433 (Internship), IT 435 (Applied Cryptography), IT 443 (Cloud Computing & IoT), IT 460 (Advanced Cybersecurity), IT 461 (Internetworking), IT 462 (Network Applications Development), and IT 465 (Wireless Networking & Security).'
    },
    {
      id: 7,
      category: 'capstone',
      question: 'What is the capstone project requirement?',
      answer: 'All IT majors complete a two-semester senior capstone project: IT 444 (Capstone Project Design) - 1 credit in fall, and IT 445 (Capstone Project Implementation) - 3 credits in spring. This allows you to apply your full range of abilities in a real-world context, working on projects that address actual industry or community needs.'
    },
    {
      id: 8,
      category: 'capstone',
      question: 'When should I start planning my capstone project?',
      answer: 'Begin thinking about capstone ideas during your junior year. The formal capstone sequence starts in your senior year with IT 444 in fall semester for project design and planning, followed by IT 445 in spring for implementation. Talk to faculty about research interests and potential project ideas early to find good matches.'
    },
    {
      id: 9,
      category: 'schedule',
      question: 'What does a typical 4-year schedule look like?',
      answer: 'Year 1: CS 149, calculus sequence, general education. Year 2: IT 160, IT 201, IT 215, IT 203, IT 212, IT 240, statistics. Year 3: IT 301, IT 302, IT 333, IT 311, IT 313, IT 340, IT 347. Year 4: IT 444 (fall), IT 445 (spring), plus electives and remaining general education. This schedule ensures proper prerequisite sequencing.'
    },
    {
      id: 10,
      category: 'schedule',
      question: 'What are the prerequisites for IT 333 (Advanced Networking)?',
      answer: 'IT 333 requires IT 215 (Introduction to Telecommunications and Computer Networking) as a prerequisite. You must achieve a minimum grade of "C-" in IT 333 to progress in the major. IT 333 is typically taken in fall of junior year.'
    },
    {
      id: 11,
      category: 'transfer',
      question: 'Can I transfer credits into the IT major?',
      answer: 'Yes, but transfer students who bring in CS 149 equivalent must complete an assessment to determine preparedness for IT 160 and IT 201. Students may be encouraged to retake CS 149 at JMU if needed. All progression requirements (minimum grades) still apply to transfer courses. Consult with Ellen Hedrick for transfer credit evaluation.'
    },
    {
      id: 12,
      category: 'career',
      question: 'What career paths are available with an IT degree?',
      answer: 'IT graduates pursue careers in cybersecurity, network administration, database administration, web/mobile development, cloud computing, systems administration, IT consulting, and more. The program prepares you for roles in business, government, healthcare, education, and technology companies. Many graduates also pursue graduate studies or professional certifications.'
    },
    {
      id: 13,
      category: 'career',
      question: 'Are internships available in the IT program?',
      answer: 'Yes! IT 433 (Internship in Information Technology) is available for 1-3 credit hours and counts as an elective. The program has strong industry connections, and faculty can help connect you with internship opportunities. Internships provide valuable real-world experience and networking opportunities.'
    },
    {
      id: 14,
      category: 'program',
      question: 'What makes JMU\'s IT program unique?',
      answer: 'JMU\'s IT program features: (1) IT 313 Community Projects - addressing real community needs, (2) Strong industry connections with faculty who have extensive professional experience, (3) Comprehensive capstone project, (4) Focus on practical, hands-on skills in cybersecurity, networking, and development, (5) Small class sizes with personalized attention from faculty.'
    },
    {
      id: 15,
      category: 'program',
      question: 'When did the IT program start at JMU?',
      answer: 'The Information Technology program launched in Fall 2020 under the direction of Dr. Samy El-Tawab. It\'s housed in the Computer Science Department within the College of Integrated Science and Engineering. The program was designed to meet growing industry demand for IT professionals with strong technical and practical skills.'
    },
    {
      id: 16,
      category: 'support',
      question: 'Who can I contact for academic advising?',
      answer: 'Ellen Hedrick (hedricme@jmu.edu) is the IT Academic Advisor and Outreach Coordinator. She handles course registration, degree audits, graduation planning, and academic support. For program-level questions, contact Dr. Samy El-Tawab (eltawass@jmu.edu), the IT Program Director.'
    },
    {
      id: 17,
      category: 'support',
      question: 'Are there IT student ambassadors I can talk to?',
      answer: 'Yes! IT student ambassadors are available to share information about classes, research projects, student organizations, and campus life. They offer personalized tours and can answer questions from a student perspective. Contact them at it.ambassadors@jmu.edu to connect with current students like Brian, Carter, Dilpreet, Jack, Karalynn, Nicholas, Peyton, Sarah, and Will.'
    },
    {
      id: 18,
      category: 'courses',
      question: 'What if I can\'t enroll in CS 149 immediately?',
      answer: 'Students who cannot enroll in CS 149 due to low MATH placement scores can take IT 101 (Introduction to Information Technology) while preparing for CS 149. IT 101 will count as an elective credit. This allows you to stay on track while building foundational skills.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: '📋' },
    { id: 'program', label: 'Program Overview', icon: '🎓' },
    { id: 'requirements', label: 'Requirements', icon: '📚' },
    { id: 'courses', label: 'Courses', icon: '💻' },
    { id: 'electives', label: 'Electives', icon: '🔧' },
    { id: 'capstone', label: 'Capstone', icon: '🚀' },
    { id: 'schedule', label: 'Scheduling', icon: '📅' },
    { id: 'transfer', label: 'Transfer Students', icon: '🔄' },
    { id: 'career', label: 'Career Paths', icon: '💼' },
    { id: 'support', label: 'Support & Advising', icon: '🤝' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Everything you need to know about the JMU Information Technology major, from requirements to career paths.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="jmu-section">
        <div className="jmu-container">
          {/* Program Overview */}
          <div className="bg-gradient-to-r from-jmuPurple to-purple-800 text-white rounded-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Your Complete Guide to the IT Major
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Find answers to the most common questions about degree requirements, course sequences, 
                capstone projects, career opportunities, and academic support in the JMU IT program.
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-jmuGold text-2xl font-bold">{faqData.length}</div>
                  <div className="text-sm">Questions Answered</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">53-56</div>
                  <div className="text-sm">Major Credit Hours</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">17</div>
                  <div className="text-sm">Core IT Courses</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">10</div>
                  <div className="text-sm">Elective Options</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 text-center">
              Browse by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-jmuPurple text-white'
                      : 'bg-white text-jmuPurple border-2 border-jmuPurple hover:bg-jmuPurple hover:text-white'
                  }`}
                >
                  <div className="text-lg mb-1">{category.icon}</div>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-xl font-heading font-semibold text-gray-900">
                {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.label}
                <span className="text-jmuPurple ml-2">({filteredFAQs.length})</span>
              </h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="p-6">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left flex justify-between items-start hover:text-jmuPurple transition-colors duration-200"
                  >
                    <h4 className="text-lg font-heading font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-jmuPurple text-white flex items-center justify-center text-sm font-bold transition-transform duration-200 ${
                      openFAQ === faq.id ? 'rotate-45' : ''
                    }`}>
                      +
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="mt-4 text-gray-700 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Reference */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                📞 Need More Help?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Academic Advising</p>
                    <p className="text-sm text-gray-600">Ellen Hedrick - hedricme@jmu.edu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Program Director</p>
                    <p className="text-sm text-gray-600">Dr. Samy El-Tawab - eltawass@jmu.edu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuGold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Student Ambassadors</p>
                    <p className="text-sm text-gray-600">it.ambassadors@jmu.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                🔗 Useful Links
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuPurple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Course Catalog</p>
                    <p className="text-sm text-gray-600">Official JMU course descriptions and requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuPurple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Registration</p>
                    <p className="text-sm text-gray-600">MyMadison student portal for course registration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-jmuPurple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">CISE Department</p>
                    <p className="text-sm text-gray-600">College of Integrated Science and Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Notice */}
          <div className="bg-lightGold border border-jmuGold rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-jmuPurple mb-2">Important Academic Notice</h4>
                <p className="text-gray-700 text-sm">
                  This FAQ provides general guidance based on current program requirements. For official academic advising, 
                  degree audits, course substitutions, or specific questions about your academic progress, please contact 
                  Ellen Hedrick or your assigned academic advisor. Program requirements may change, so always verify 
                  current information with official JMU sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;