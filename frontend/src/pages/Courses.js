import React, { useState } from 'react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const courseData = {
    // Core Programming & Foundations
    'CS 149': {
      name: 'Introduction to Programming',
      credits: 3,
      category: 'core',
      year: 1,
      semester: 'Fall',
      prerequisites: ['MATH 155', 'MATH 156', 'or sufficient Math Placement score'],
      description: 'Fundamental problem-solving techniques using a modern programming language. Topics include variables, input/output, decisions, loops, functions, arrays, and objects. Students learn about algorithm development, testing strategies, and software tools.',
      topics: ['Variables & Data Types', 'Input/Output Operations', 'Decision Structures', 'Loops & Iteration', 'Functions', 'Arrays', 'Objects', 'Algorithm Development', 'Testing Strategies', 'Software Tools'],
      note: 'You may only enroll in CS 149 at most twice. Minimum grade of B- required to advance to IT 160 and IT 201.'
    },
    'IT 160': {
      name: 'Data Structures and Advanced Programming',
      credits: 3,
      category: 'core',
      year: 1,
      semester: 'Spring',
      prerequisites: ['IT major', 'minimum grade of B- in CS 149'],
      description: 'Applied data structures, introductory algorithm analysis and advanced programming techniques in Python. Topics include dictionaries, objects, sets, multisets, stacks, queues and priority queues, as well as their applications in IT.',
      topics: ['Python Programming', 'Dictionaries', 'Objects & Classes', 'Sets & Multisets', 'Stacks & Queues', 'Priority Queues', 'Algorithm Analysis', 'Data Structure Applications'],
      note: 'Minimum grade of C required for progression in major.'
    },
    'IT 201': {
      name: 'Computational Structures and Logic',
      credits: 3,
      category: 'core',
      year: 1,
      semester: 'Spring',
      prerequisites: ['IT major', 'minimum grade of B- in CS 149'],
      description: 'Discrete mathematical concepts and their applications within IT. Structures include functions, relations, sets, logic, matrices, elementary number theory, basics of counting, graph theory, discrete probability and digital logic.',
      topics: ['Functions & Relations', 'Sets & Logic', 'Matrices', 'Number Theory', 'Counting Principles', 'Graph Theory', 'Discrete Probability', 'Digital Logic'],
      note: 'Minimum grade of C required for progression in major.'
    },

    // Security & Systems
    'IT 203': {
      name: 'Information Security and Privacy',
      credits: 3,
      category: 'core',
      year: 2,
      semester: 'Fall',
      prerequisites: ['IT majors only', 'MATH 231 or MATH 235', 'minimum grade of C in IT 160 and IT 201'],
      description: 'Computer security principles and incident prevention and management. Covers information assurance dimensions of availability, integrity, authentication, confidentiality and non-repudiation for secure transmission, storage and processing.',
      topics: ['Security Principles', 'Incident Prevention', 'Availability & Integrity', 'Authentication', 'Confidentiality', 'Non-repudiation', 'Secure Transmission', 'Secure Storage', 'Information Processing Security']
    },
    'IT 212': {
      name: 'Digital Electronics',
      credits: 3,
      category: 'core',
      year: 2,
      semester: 'Spring',
      prerequisites: ['IT majors only', 'MATH 231 or MATH 235', 'minimum grade of C in IT 160 and IT 201'],
      description: 'Digital systems, logic design and underlying hardware of computer systems. Topics include number systems, binary representations, digital logic gates, combinational logic blocks, sequential circuits, programmable logic devices and basic computer architecture.',
      topics: ['Number Systems', 'Binary Representations', 'Digital Logic Gates', 'Combinational Logic', 'Sequential Circuits', 'Programmable Logic Devices', 'Computer Architecture', 'Circuit Design & Analysis', 'Laboratory Exercises']
    },

    // Networking
    'IT 215': {
      name: 'Introduction to Telecommunications and Computer Networking',
      credits: 3,
      category: 'core',
      year: 2,
      semester: 'Fall',
      prerequisites: ['IT majors only', 'MATH 231 or MATH 235', 'minimum grade of C in IT 160 and IT 201'],
      description: 'Telecommunications and computer networking concepts. Students learn how networked applications and services are implemented and secured using wireless and wired networks, network services, and protocols.',
      topics: ['Command-line Administration', 'Virtualization', 'Packet Analysis', 'Physical/Network/Transport Addresses', 'Internet Protocols', 'Network Services', 'Network Applications', 'Troubleshooting', 'Network Security'],
      note: 'Minimum grade of C required for progression in major.'
    },
    'IT 333': {
      name: 'Advanced Networking for Information Technology',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Fall',
      prerequisites: ['minimum grade of C in IT 201 or CS 227', 'minimum grade of C in IT 215'],
      description: 'Practical study of networking principles and deployment for efficient and secure networks providing voice, data, video and mobility applications. Hands-on exercises with network components, protocols, architectures, security, and management.',
      topics: ['Network Components', 'Network Protocols', 'Network Interfaces', 'Network Architectures', 'Wired & Wireless Facilities', 'Network Services', 'Network Analysis & Troubleshooting', 'Network Management', 'Network Security', 'Networked Applications'],
      note: 'Minimum grade of C- required for progression in major.'
    },

    // Database & Web
    'IT 240': {
      name: 'Database Administration',
      credits: 3,
      category: 'core',
      year: 2,
      semester: 'Spring',
      prerequisites: ['IT majors only', 'minimum grade of C in IT 160 and IT 201'],
      description: 'Database administration focused on securing and maintaining modern database systems in various hosting environments. Hands-on exercises in database deployment, administration, backup and recovery.',
      topics: ['Database Deployment', 'Database Administration', 'Database Security', 'Backup & Recovery', 'Modern Database Systems', 'Hosting Environments', 'Database Maintenance']
    },
    'IT 301': {
      name: 'Web Technologies',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Fall',
      prerequisites: ['IT 240', 'IT 215'],
      description: 'Web technologies including languages, client-server architecture, networking, database concepts and web services. Students develop dynamic, secure and usable web applications.',
      topics: ['Web Languages', 'Client-Server Architecture', 'Web Networking', 'Database Integration', 'Web Services', 'Dynamic Web Applications', 'Web Security', 'Usability Design']
    },

    // Systems Administration
    'IT 311': {
      name: 'Operating Systems Administration',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Spring',
      prerequisites: ['IT 212'],
      description: 'Configuring, deploying and administering computer operating systems. Topics include system configuration, file systems, security, administration, network interfacing, multitasking, multiuser systems, device drivers and performance analysis.',
      topics: ['System Configuration', 'File Systems', 'System Security', 'System Administration', 'Network Interfacing', 'Multitasking Systems', 'Multiuser Systems', 'Device Driver Installation', 'Performance Analysis']
    },

    // Specialized Core Courses
    'IT 302': {
      name: 'Societal and Ethical Issues in Information Technology',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Fall',
      prerequisites: ['IT 203'],
      description: 'Survey of professional, societal and ethical issues in IT. Topics include professional responsibilities, privacy, intellectual property, risk identification, IT governance, economic factors, and environmental issues.',
      topics: ['Professional Responsibilities', 'Privacy Issues', 'Intellectual Property', 'Risk Identification & Evaluation', 'IT Governance', 'Economic Factors', 'Environmental Issues', 'Ethical Decision Making']
    },
    'IT 313': {
      name: 'Community Projects',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Spring',
      prerequisites: ['IT 301', 'minimum grade of C- in IT 333'],
      description: 'Apply information technology to projects from community partners, including education, government, business and industry. Students work in teams on semester-long projects addressing real-world problems requiring technology solutions.',
      topics: ['Community Partnership', 'Real-world Problem Solving', 'Team Collaboration', 'Project Management', 'Technology Solutions', 'Client Communication', 'Project Documentation']
    },
    'IT 340': {
      name: 'Data Science and Machine Learning',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Spring',
      prerequisites: ['IT 240', 'MATH 220 or MATH 232 or MATH 235'],
      description: 'Overview of data science and machine learning for IT. Students learn to extract data from sensing devices and use machine learning techniques for data analysis. Covers skills and tools for data science.',
      topics: ['Data Extraction', 'Sensing Devices', 'Machine Learning Techniques', 'Data Analysis', 'Data Science Tools', 'Statistical Methods', 'Predictive Modeling']
    },
    'IT 347': {
      name: 'Interactive Computing Systems',
      credits: 3,
      category: 'core',
      year: 3,
      semester: 'Spring',
      prerequisites: ['IT 301'],
      description: 'Design and evaluation of effective user interfaces. Covers principles for designing IT products for user interaction, development process, iterative life cycle management, systems analysis, design, usability specifications, prototyping and evaluation.',
      topics: ['User Interface Design', 'User Interaction Principles', 'Iterative Life Cycle', 'Systems Analysis', 'Design Representation', 'Usability Specifications', 'Prototyping', 'User-based Evaluation', 'Cross-disciplinary Approach']
    },

    // Capstone
    'IT 444': {
      name: 'Capstone Project Design',
      credits: 1,
      category: 'capstone',
      year: 4,
      semester: 'Fall',
      prerequisites: ['IT 313'],
      description: 'First course in two-course capstone sequence. Students work in groups to propose an IT-based solution to address a problem or need in the community.',
      topics: ['Project Proposal', 'Problem Identification', 'Solution Design', 'Team Collaboration', 'Community Needs Assessment', 'Project Planning']
    },
    'IT 445': {
      name: 'Capstone Project Implementation',
      credits: 3,
      category: 'capstone',
      year: 4,
      semester: 'Spring',
      prerequisites: ['IT 444'],
      description: 'Second course in capstone sequence. Students implement and integrate their design, manage the project as a team, and prepare oral and written reports on their work.',
      topics: ['Project Implementation', 'System Integration', 'Project Management', 'Team Leadership', 'Technical Documentation', 'Oral Presentations', 'Written Reports']
    },

    // Math Requirements
    'MATH 235': {
      name: 'Calculus I',
      credits: 4,
      category: 'math',
      year: 1,
      semester: 'Fall',
      prerequisites: ['Sufficient score on Mathematics Placement Exam'],
      description: 'First university course in calculus with rigorous coverage for science, engineering or mathematics majors. Topics include limits, continuity, derivatives, applications of derivatives, Riemann sums, integrals and the Fundamental Theorem of Calculus.',
      topics: ['Limits', 'Continuity', 'Derivatives', 'Applications of Derivatives', 'Riemann Sums', 'Integrals', 'Fundamental Theorem of Calculus', 'Algebraic Functions', 'Trigonometric Functions', 'Exponential & Logarithmic Functions'],
      note: 'Alternative to MATH 231/232 sequence. Not open to students with credit in MATH 232 or MATH 234.'
    },
    'MATH 231': {
      name: 'Calculus with Functions I',
      credits: 3,
      category: 'math',
      year: 1,
      semester: 'Fall',
      prerequisites: ['MATH 155', 'MATH 156', 'or sufficient Math Placement score'],
      description: 'First part of two-semester sequence combining calculus with function review. Covers properties of functions, graphing, polynomials, limits, continuity, differentiation and applications in context of algebraic functions.',
      topics: ['Properties of Functions', 'Graphing', 'Polynomial Properties', 'Limits', 'Continuity', 'Differentiation', 'Applications of Derivatives', 'Algebraic Functions'],
      note: 'Part of MATH 231/232 sequence. Not open to students with credit in MATH 234 or MATH 235.'
    },
    'MATH 232': {
      name: 'Calculus with Functions II',
      credits: 3,
      category: 'math',
      year: 1,
      semester: 'Spring',
      prerequisites: ['MATH 231 with grade of C- or better'],
      description: 'Second part of calculus sequence. Covers properties and differentiation of trigonometric, exponential and logarithmic functions; L\'Hôpital\'s Rule; Riemann sums; integrals; and Fundamental Theorem of Calculus.',
      topics: ['Trigonometric Functions', 'Exponential Functions', 'Logarithmic Functions', 'L\'Hôpital\'s Rule', 'Riemann Sums', 'Integrals', 'Fundamental Theorem of Calculus'],
      note: 'Completes MATH 231/232 sequence. Not open to students with credit in MATH 234 or MATH 235.'
    },

    // Statistics Options
    'MATH 220': {
      name: 'Elementary Statistics',
      credits: 3,
      category: 'math',
      year: 2,
      semester: 'Spring',
      prerequisites: ['MATH 105 with grade of C- or better', 'or sufficient Math Placement score'],
      description: 'Descriptive statistics, frequency distributions, sampling, estimation and testing of hypotheses, regression, correlation and introduction to statistical analysis using computers.',
      topics: ['Descriptive Statistics', 'Frequency Distributions', 'Sampling', 'Estimation', 'Hypothesis Testing', 'Regression', 'Correlation', 'Computer Statistical Analysis']
    },
    'MATH 229': {
      name: 'Introduction to Applied Statistics Using R',
      credits: 3,
      category: 'math',
      year: 2,
      semester: 'Spring',
      prerequisites: ['Sufficient statistics and calculus placement scores'],
      description: 'In-depth applied statistics for STEM fields. Covers descriptive statistics, data collection, sampling distributions, Central Limit Theorem, estimation, confidence intervals, hypothesis testing, regression, correlation, and chi-square tests using R programming language.',
      topics: ['Descriptive Statistics', 'Data Collection', 'Sampling Distributions', 'Central Limit Theorem', 'Confidence Intervals', 'Hypothesis Testing', 'Linear Regression', 'Chi-square Tests', 'R Programming'],
      note: 'More in-depth than MATH 220, encouraged for STEM majors. Not open to students with credit in MATH 220, MATH 318, or equivalents.'
    },
    'MATH 318': {
      name: 'Introduction to Probability and Statistics',
      credits: 4,
      category: 'math',
      year: 2,
      semester: 'Spring',
      prerequisites: ['MATH 236'],
      description: 'Covers descriptive statistics, counting, probability axioms, discrete and continuous random variables, expected values, sampling distributions, Central Limit Theorem, inference for proportions and means, chi-square tests, and regression.',
      topics: ['Descriptive Statistics', 'Counting & Probability', 'Random Variables', 'Expected Values', 'Sampling Distributions', 'Central Limit Theorem', 'Statistical Inference', 'Chi-square Tests', 'Linear Regression'],
      note: 'Not open to students with credit in MATH 229 or MATH 329.'
    },

    // Electives
    'IT 334': {
      name: 'Computer Cyber Crime, Forensics and Auditing',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['IT 302'],
      description: 'Introduction to computer crime, relevant laws, agencies and standards. Topics include auditing, logging, forensics software, legal principles such as chain of evidence, electronic document discovery, eavesdropping and entrapment.',
      topics: ['Computer Crime Investigation', 'Legal Frameworks', 'Digital Forensics', 'Auditing & Logging', 'Chain of Evidence', 'Electronic Discovery', 'Forensics Tools', 'Legal Principles']
    },
    'IT 341': {
      name: 'Mobile Applications',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['IT 240', 'minimum grade of C- in IT 333'],
      description: 'Project-based introduction to mobile application development. Emphasizes design and programming paradigms for mobile devices including user interfaces, event-based programming, inter-process communications, networking, and mobile-specific capabilities.',
      topics: ['Mobile UI Design', 'Event-based Programming', 'Inter-process Communication', 'Mobile Networking', 'Mobile-specific Features', 'Performance Optimization', 'Resource Management', 'App Deployment']
    },
    'IT 342': {
      name: 'Server Administration',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['IT 311', 'minimum grade of C- in IT 333'],
      description: 'Management of web servers including administration activities and domains for computing systems. Covers configuration, deployment, performance analysis, backup and recovery with hands-on server administration exercises.',
      topics: ['Web Server Management', 'Server Configuration', 'Deployment Strategies', 'Performance Analysis', 'Backup & Recovery', 'Server Security', 'Load Balancing', 'Server Monitoring']
    },
    'IT 433': {
      name: 'Internship in Information Technology',
      credits: '1-3',
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['IT 311', 'grade of C- in IT 333', 'prior approval from IT faculty'],
      description: 'Students participate in an internship related to information technology outside of the university. Provides real-world experience and professional networking opportunities.',
      topics: ['Professional Experience', 'Industry Exposure', 'Networking', 'Skill Application', 'Career Development', 'Professional Communication']
    },
    'IT 435': {
      name: 'Applied Cryptography',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['IT 203', 'IT 201'],
      description: 'Cryptography techniques with analysis of historical and societal consequences. Topics include combinatorics, number theory, modular arithmetic, classical ciphers, modern encryption, public-key cryptography, hash functions, and post-quantum cryptography.',
      topics: ['Combinatorics & Number Theory', 'Modular Arithmetic', 'Classical Ciphers', 'Modern Encryption', 'Public-key Cryptography', 'Hash Functions', 'Side-channel Attacks', 'Post-quantum Cryptography']
    },
    'IT 443': {
      name: 'Cloud Computing and IoT Networks',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['minimum grade of C- in IT 333'],
      description: 'Network architectures of cloud computing and Internet of Things (IoT). Topics include software and hardware components, sensors and detectors for cloud and IoT computing, and their applications with hands-on IoT exercises.',
      topics: ['Cloud Architecture', 'IoT Networks', 'Sensors & Detectors', 'Cloud Services', 'IoT Applications', 'Edge Computing', 'Cloud Security', 'IoT Protocols']
    },
    'IT 460': {
      name: 'Advanced Cybersecurity',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['minimum grade of C- in IT 333'],
      description: 'Underlying principles of cybersecurity for information and infrastructure network systems. Emphasis on network access control, user authentication, intrusion prevention systems, network boundary protection, and penetration testing.',
      topics: ['Network Access Control', 'User Authentication & Authorization', 'Intrusion Prevention', 'Network Boundary Protection', 'Penetration Testing', 'Security Assessment', 'Incident Response', 'Security Architecture']
    },
    'IT 461': {
      name: 'Internetworking',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['minimum grade of C- in IT 333'],
      description: 'Technologies and protocols for network interconnection. Focuses on routing and establishing end-to-end information transfer paths among end nodes (clients and servers).',
      topics: ['Network Interconnection', 'Routing Protocols', 'End-to-end Communication', 'Network Topologies', 'Protocol Analysis', 'Network Design', 'Traffic Management', 'Quality of Service']
    },
    'IT 462': {
      name: 'Network Applications Development',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['minimum grade of C- in IT 333'],
      description: 'Design and implementation of network-based applications focusing on application and transport layers. Covers sockets, Java, Python, distributed processing, synchronization, and performance analysis.',
      topics: ['Network Programming', 'Sockets Programming', 'Java & Python Networking', 'Distributed Processing', 'Synchronization', 'Replicated Data Management', 'Performance Analysis', 'Network APIs']
    },
    'IT 465': {
      name: 'Wireless Networking and Security',
      credits: 3,
      category: 'elective',
      year: 4,
      semester: 'Both',
      prerequisites: ['minimum grade of C- in IT 333'],
      description: 'Wireless networking and wireless LAN security and forensics. Radio frequency fundamentals with emphasis on applications and services. Hands-on wireless LAN configuration, analysis tools, and security applications.',
      topics: ['Radio Frequency Fundamentals', 'Wireless LAN Configuration', 'Wireless Security', 'Network Analysis Tools', 'Wireless Forensics', 'Performance Optimization', 'Wireless Protocols', 'Security Assessment']
    }
  };

  const categories = [
    { id: 'all', label: 'All Courses', icon: '📚', count: Object.keys(courseData).length },
    { id: 'core', label: 'Core Courses', icon: '🎯', count: Object.values(courseData).filter(c => c.category === 'core').length },
    { id: 'math', label: 'Math Courses', icon: '📊', count: Object.values(courseData).filter(c => c.category === 'math').length },
    { id: 'elective', label: 'Electives', icon: '🔧', count: Object.values(courseData).filter(c => c.category === 'elective').length },
    { id: 'capstone', label: 'Capstone', icon: '🚀', count: Object.values(courseData).filter(c => c.category === 'capstone').length }
  ];

  const filteredCourses = Object.entries(courseData).filter(([code, course]) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const CourseCard = ({ code, course }) => (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border-l-4 border-jmuPurple"
      onClick={() => setSelectedCourse({ code, ...course })}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">{code}</h3>
            <p className="text-sm text-jmuPurple font-medium">{course.name}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-700">{course.credits} credits</div>
            <div className="text-xs text-gray-500 capitalize">{course.category}</div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        
        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="mb-3">
            <span className="text-xs font-semibold text-gray-700">Prerequisites: </span>
            <span className="text-xs text-gray-600">{course.prerequisites.join(', ')}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Year {course.year} • {course.semester}</span>
          <span className="text-jmuPurple hover:underline">View Details →</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Course Explorer
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Explore all Information Technology courses with detailed descriptions, prerequisites, and learning outcomes.
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
                Complete IT Curriculum Guide
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Browse the complete catalog of Information Technology courses, from foundational programming 
                to advanced specializations in cybersecurity, networking, and emerging technologies.
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-jmuGold text-2xl font-bold">{Object.keys(courseData).length}</div>
                  <div className="text-sm">Total Courses</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">53-56</div>
                  <div className="text-sm">Major Credit Hours</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">10</div>
                  <div className="text-sm">Elective Options</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">4</div>
                  <div className="text-sm">Year Program</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search courses by code, name, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jmuPurple focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-jmuPurple text-white'
                        : 'bg-gray-100 text-jmuPurple hover:bg-jmuPurple hover:text-white'
                    }`}
                  >
                    {category.icon} {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredCourses.map(([code, course]) => (
              <CourseCard key={code} code={code} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* Academic Notice */}
          <div className="bg-lightGold border border-jmuGold rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-jmuPurple mb-2">Academic Planning Notice</h4>
                <p className="text-gray-700 text-sm">
                  Course information is for planning purposes only. Prerequisites, course availability, and requirements 
                  may change. Always verify current information with your academic advisor and the official JMU course catalog 
                  before registering for classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {selectedCourse.code}: {selectedCourse.name}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-jmuPurple text-white px-3 py-1 rounded-full">{selectedCourse.credits} Credits</span>
                    <span className="capitalize">{selectedCourse.category}</span>
                    <span>Year {selectedCourse.year} • {selectedCourse.semester}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Course Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedCourse.description}</p>
                </div>

                {selectedCourse.prerequisites && selectedCourse.prerequisites.length > 0 && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Prerequisites</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedCourse.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCourse.topics && selectedCourse.topics.length > 0 && (
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Topics Covered</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedCourse.topics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-jmuGold rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCourse.note && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="text-lg font-heading font-semibold text-blue-900 mb-2">Important Note</h3>
                    <p className="text-blue-800 text-sm">{selectedCourse.note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;