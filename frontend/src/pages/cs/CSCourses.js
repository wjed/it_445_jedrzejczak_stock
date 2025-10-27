import React, { useState } from 'react';

const CSCourses = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const coreRequirements = [
    {
      code: 'CS 149',
      title: 'Introduction to Programming',
      credits: 3,
      description: 'Fundamental problem-solving techniques using a modern programming language. Topics include variables, input/output, decisions, loops, functions, arrays, and objects.',
      prerequisites: 'MATH 155, MATH 156 or sufficient score on Mathematics Placement Exam',
      year: 1,
      category: 'core'
    },
    {
      code: 'CS 159',
      title: 'Advanced Programming',
      credits: 3,
      description: 'Students use advanced problem-solving strategies to develop algorithms using classes and objects and techniques such as recursion, exceptions and file I/O.',
      prerequisites: 'Grade of "B-" or better in CS 149',
      year: 1,
      category: 'core'
    },
    {
      code: 'CS 240',
      title: 'Algorithms and Data Structures',
      credits: 3,
      description: 'Students learn how to implement stacks, queues, lists, sets and maps using arrays, linked lists, binary trees, heaps, binary search trees, balanced trees and hashing.',
      prerequisites: 'Fully admitted CS majors/minors only and grades of "C-" or better in CS 159, CS 227/MATH 227 or MATH 245, and MATH 231',
      year: 2,
      category: 'core'
    },
    {
      code: 'CS 261',
      title: 'Computer Systems I',
      credits: 3,
      description: 'Introduction to the operation of modern interrupt-driven computer systems. Explores representation of software and information in binary memory.',
      prerequisites: 'Fully admitted CS majors/minors only and minimum grade of "C-" in CS 227/MATH 227 or MATH 245, and CS 159',
      year: 2,
      category: 'core'
    },
    {
      code: 'CS 327',
      title: 'Discrete Structures II',
      credits: 3,
      description: 'Builds on theoretical foundation from Discrete Structures I. Topics include elementary number theory, matrices, graph theory, automata, computability and complexity theory.',
      prerequisites: 'Fully admitted CS majors only and grade of "C-" or better in CS 227/MATH 227 or MATH 245, and CS 240',
      year: 3,
      category: 'core'
    },
    {
      code: 'CS 345',
      title: 'Software Engineering',
      credits: 3,
      description: 'Study of modern methods and tools for software development. Topics include development process models, tools, design principles, quality assurance and program management.',
      prerequisites: 'Fully admitted CS majors/minors only and grade of "C-" or better in CS 159',
      year: 2,
      category: 'core'
    },
    {
      code: 'CS 361',
      title: 'Computer Systems II',
      credits: 3,
      description: 'Intermediate exploration of modern interrupt-driven computer systems. Explores models of computation, parallel/concurrent software, and Internet protocols.',
      prerequisites: 'Fully admitted CS majors only and grades of "C-" or better in CS 240 and CS 261',
      year: 3,
      category: 'core'
    },
    {
      code: 'CS 430',
      title: 'Programming Languages',
      credits: 3,
      description: 'Study of programming languages in terms of fundamental principles including object-oriented, functional, concurrent and logic programming.',
      prerequisites: 'Fully admitted CS majors/minors only and grades of "C-" or better in CS 240 and CS 261',
      year: 3,
      category: 'core'
    }
  ];

  const mathRequirements = [
    {
      code: 'CS 227',
      title: 'Discrete Structures I',
      credits: 3,
      description: 'Introduction to discrete mathematical structures including functions, relations, sets, logic, matrices, elementary number theory, proof techniques.',
      prerequisites: 'Grade of "B-" or better in CS 149',
      year: 1,
      category: 'math'
    },
    {
      code: 'MATH 231',
      title: 'Calculus with Functions I',
      credits: 3,
      description: 'First university course in calculus with review of functions. Topics include properties of functions, limits, continuity, differentiation and applications.',
      prerequisites: 'MATH 155, MATH 156 or sufficient score on Mathematics Placement Exam',
      year: 1,
      category: 'math'
    },
    {
      code: 'MATH 232',
      title: 'Calculus with Functions II',
      credits: 3,
      description: 'Continuation of MATH 231. Topics include trigonometric, exponential and logarithmic functions, L\'Hôpital\'s Rule, Riemann sums, integrals.',
      prerequisites: 'MATH 231 with grade of "C-" or better',
      year: 1,
      category: 'math'
    },
    {
      code: 'MATH 220',
      title: 'Elementary Statistics',
      credits: 3,
      description: 'Descriptive statistics, frequency distributions, sampling, estimation and testing of hypotheses, regression, correlation and statistical analysis using computers.',
      prerequisites: 'MATH 105 with grade of "C-" or better or sufficient score on Mathematics Placement Exam',
      year: 2,
      category: 'math'
    }
  ];

  const algorithmElectives = [
    {
      code: 'CS 412',
      title: 'Applied Algorithms',
      credits: 3,
      description: 'Application of algorithmic techniques to solve practical problems in computer science.',
      prerequisites: 'CS 240',
      year: 4,
      category: 'algorithm'
    },
    {
      code: 'CS 452',
      title: 'Design and Analysis of Algorithms',
      credits: 3,
      description: 'Formal analysis of algorithm efficiency, advanced algorithmic techniques, and complexity theory.',
      prerequisites: 'CS 240',
      year: 4,
      category: 'algorithm'
    }
  ];

  const systemsElectives = [
    {
      code: 'CS 432',
      title: 'Compilers',
      credits: 3,
      description: 'Design and implementation of programming language compilers and interpreters.',
      prerequisites: 'CS 361',
      year: 4,
      category: 'systems'
    },
    {
      code: 'CS 450',
      title: 'Operating Systems',
      credits: 3,
      description: 'Design and implementation of operating systems including process management, memory management, and file systems.',
      prerequisites: 'CS 361',
      year: 4,
      category: 'systems'
    },
    {
      code: 'CS 455',
      title: 'Advanced Computer Networking',
      credits: 3,
      description: 'Advanced topics in computer networking including network protocols, security, and performance analysis.',
      prerequisites: 'CS 361',
      year: 4,
      category: 'systems'
    },
    {
      code: 'CS 456',
      title: 'Computer Architecture',
      credits: 3,
      description: 'Design and organization of computer systems including processor design, memory hierarchy, and I/O systems.',
      prerequisites: 'CS 361',
      year: 4,
      category: 'systems'
    },
    {
      code: 'CS 470',
      title: 'Parallel and Distributed Systems',
      credits: 3,
      description: 'Design and implementation of parallel and distributed computing systems.',
      prerequisites: 'CS 361',
      year: 4,
      category: 'systems'
    }
  ];

  const allCourses = [...coreRequirements, ...mathRequirements, ...algorithmElectives, ...systemsElectives];

  const filteredCourses = allCourses.filter(course => {
    const yearMatch = selectedYear === 'all' || course.year.toString() === selectedYear;
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'core': return 'bg-csTeal';
      case 'math': return 'bg-csSlateGray';
      case 'algorithm': return 'bg-csPurple';
      case 'systems': return 'bg-csDarkTeal';
      default: return 'bg-csTeal';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'core': return 'Core CS';
      case 'math': return 'Mathematics';
      case 'algorithm': return 'Algorithms';
      case 'systems': return 'Systems';
      default: return category;
    }
  };

  return (
    <div className="bg-csLightGold min-h-screen">
      <div className="jmu-container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-csSlateGray mb-4">Computer Science Curriculum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive Bachelor of Science degree program in Computer Science at JMU
          </p>
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Program Description</h2>
          <p className="text-gray-700 mb-6">
            The Bachelor of Science degree in Computer Science prepares graduates to excel in the field of computing. 
            All students complete required coursework in programming, mathematics, data structures, algorithms, software engineering, 
            computer systems, and programming languages. Students also choose elective courses from a variety of computing subfields 
            including robotics, artificial intelligence, human-computer interaction, cyber defense, database systems, and web applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold text-csSlateGray mb-2">Total Credits</h3>
              <p className="text-2xl font-bold text-csTeal">120</p>
            </div>
            <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold text-csSlateGray mb-2">Major Requirements</h3>
              <p className="text-2xl font-bold text-csTeal">49-52</p>
            </div>
            <div className="bg-csIceBlue bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold text-csSlateGray mb-2">General Education</h3>
              <p className="text-2xl font-bold text-csTeal">41</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-csSlateGray mb-2">Filter by Year</label>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-csTeal"
              >
                <option value="all">All Years</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-csSlateGray mb-2">Filter by Category</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-csTeal"
              >
                <option value="all">All Categories</option>
                <option value="core">Core CS Courses</option>
                <option value="math">Mathematics</option>
                <option value="algorithm">Algorithm Electives</option>
                <option value="systems">Systems Electives</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${getCategoryColor(course.category)} h-2`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-csSlateGray">{course.code}</h3>
                    <p className="text-lg text-gray-700">{course.title}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-csIceBlue text-csSlateGray px-2 py-1 rounded text-sm font-medium">
                      {course.credits} credits
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Year {course.year}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className={`${getCategoryColor(course.category)} text-white px-2 py-1 rounded text-xs font-medium`}>
                      {getCategoryName(course.category)}
                    </span>
                  </div>
                  {course.prerequisites && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 font-medium">Prerequisites:</p>
                      <p className="text-xs text-gray-600">{course.prerequisites}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admission Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-csSlateGray mb-4">Admission Requirements</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800 font-medium">
              ⚠️ Admission to JMU does not guarantee admission to the Computer Science major. Admission is limited.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-csSlateGray mb-3">Requirements to Apply</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Be enrolled at JMU</li>
                <li>• Have declared the CS major</li>
                <li>• Complete minimum of 15 credit hours</li>
                <li>• Complete or be enrolled in CS 159 and CS 227/MATH 227/MATH 245</li>
                <li>• Achieve grades of "B-" or better in CS 159 and CS 227/MATH 227/MATH 245</li>
                <li>• Submit official application with essay (250 words max)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-csSlateGray mb-3">Application Cycles</h3>
              <div className="space-y-3">
                <div className="bg-csIceBlue bg-opacity-20 rounded p-3">
                  <p className="font-medium text-csSlateGray">Fall Application</p>
                  <p className="text-sm text-gray-600">For spring admission • Notification by January 1st</p>
                </div>
                <div className="bg-csIceBlue bg-opacity-20 rounded p-3">
                  <p className="font-medium text-csSlateGray">Spring Application</p>
                  <p className="text-sm text-gray-600">For fall admission • Notification by May 31st</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSCourses;