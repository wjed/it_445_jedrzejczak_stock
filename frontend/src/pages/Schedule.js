import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const Schedule = () => {
  // Course data based on JMU IT curriculum
  const courseData = {
    // Core Courses
    'CS 149': { name: 'Introduction to Programming', credits: 3, prerequisites: [], semester: 'Fall', year: 1 },
    'IT 160': { name: 'Data Structures and Advanced Programming', credits: 3, prerequisites: ['CS 149'], semester: 'Spring', year: 1 },
    'IT 201': { name: 'Computational Structures and Logic', credits: 3, prerequisites: ['CS 149'], semester: 'Spring', year: 1 },
    'IT 203': { name: 'Information Security and Privacy', credits: 3, prerequisites: [], semester: 'Fall', year: 2 },
    'IT 212': { name: 'Digital Electronics', credits: 3, prerequisites: [], semester: 'Spring', year: 2 },
    'IT 215': { name: 'Introduction to Telecommunications and Computer Networking', credits: 3, prerequisites: [], semester: 'Fall', year: 2 },
    'IT 240': { name: 'Database Administration', credits: 3, prerequisites: [], semester: 'Spring', year: 2 },
    'IT 301': { name: 'Web Technologies', credits: 3, prerequisites: ['IT 160'], semester: 'Fall', year: 3 },
    'IT 302': { name: 'Societal and Ethical Issues in Information Technology', credits: 3, prerequisites: [], semester: 'Fall', year: 3 },
    'IT 311': { name: 'Operating Systems Administration', credits: 3, prerequisites: [], semester: 'Spring', year: 3 },
    'IT 313': { name: 'Community Projects', credits: 3, prerequisites: [], semester: 'Spring', year: 3 },
    'IT 333': { name: 'Advanced Networking for Information Technology', credits: 3, prerequisites: ['IT 215'], semester: 'Fall', year: 3 },
    'IT 340': { name: 'Data Science and Machine Learning', credits: 3, prerequisites: [], semester: 'Spring', year: 3 },
    'IT 347': { name: 'Interactive Computing Systems', credits: 3, prerequisites: [], semester: 'Spring', year: 3 },
    'IT 444': { name: 'Capstone Project Design', credits: 1, prerequisites: [], semester: 'Fall', year: 4 },
    'IT 445': { name: 'Capstone Project Implementation', credits: 3, prerequisites: ['IT 444'], semester: 'Spring', year: 4 },
    
    // Math Requirements
    'MATH 231': { name: 'Calculus with Functions I', credits: 3, prerequisites: [], semester: 'Fall', year: 1 },
    'MATH 232': { name: 'Calculus with Functions II', credits: 3, prerequisites: ['MATH 231'], semester: 'Spring', year: 1 },
    'MATH 235': { name: 'Calculus I', credits: 4, prerequisites: [], semester: 'Fall', year: 1 },
    'MATH 220': { name: 'Elementary Statistics', credits: 3, prerequisites: [], semester: 'Spring', year: 2 },
    'MATH 229': { name: 'Introduction to Applied Statistics Using R', credits: 3, prerequisites: [], semester: 'Spring', year: 2 },
    'MATH 318': { name: 'Introduction to Probability and Statistics', credits: 4, prerequisites: [], semester: 'Spring', year: 2 },
    
    // Electives
    'IT 334': { name: 'Computer Cyber Crime, Forensics and Auditing', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 341': { name: 'Mobile Applications', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 342': { name: 'Server Administration', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 433': { name: 'Internship in Information Technology', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 435': { name: 'Applied Cryptography', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 443': { name: 'Cloud Computing and IoT Networks', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 460': { name: 'Advanced Cybersecurity', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 461': { name: 'Internetworking', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 462': { name: 'Network Applications Development', credits: 3, prerequisites: [], semester: 'Both', year: 4 },
    'IT 465': { name: 'Wireless Networking and Security', credits: 3, prerequisites: [], semester: 'Both', year: 4 }
  };

  // Initialize schedule with recommended courses
  const [schedule, setSchedule] = useState({
    'Year 1 Fall': ['CS 149', 'MATH 231'],
    'Year 1 Spring': ['IT 160', 'IT 201', 'MATH 232'],
    'Year 2 Fall': ['IT 215', 'IT 203'],
    'Year 2 Spring': ['IT 212', 'IT 240', 'MATH 220'],
    'Year 3 Fall': ['IT 301', 'IT 302', 'IT 333'],
    'Year 3 Spring': ['IT 311', 'IT 313', 'IT 340', 'IT 347'],
    'Year 4 Fall': ['IT 444'],
    'Year 4 Spring': ['IT 445']
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [draggedCourse, setDraggedCourse] = useState(null);

  // Calculate total credits for each semester
  const calculateCredits = (semesterCourses) => {
    return semesterCourses.reduce((total, courseCode) => {
      return total + (courseData[courseCode]?.credits || 0);
    }, 0);
  };

  // Check if prerequisites are met
  const checkPrerequisites = (courseCode, currentSemester) => {
    const course = courseData[courseCode];
    if (!course || !course.prerequisites.length) return { met: true, missing: [] };

    const semesterOrder = ['Year 1 Fall', 'Year 1 Spring', 'Year 2 Fall', 'Year 2 Spring', 'Year 3 Fall', 'Year 3 Spring', 'Year 4 Fall', 'Year 4 Spring'];
    const currentIndex = semesterOrder.indexOf(currentSemester);
    
    const completedCourses = [];
    for (let i = 0; i < currentIndex; i++) {
      completedCourses.push(...schedule[semesterOrder[i]]);
    }

    const missing = course.prerequisites.filter(prereq => !completedCourses.includes(prereq));
    return { met: missing.length === 0, missing };
  };

  // Handle drag and drop
  const handleDragStart = (e, courseCode) => {
    setDraggedCourse(courseCode);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSemester) => {
    e.preventDefault();
    if (!draggedCourse) return;

    // Remove course from current location
    const newSchedule = { ...schedule };
    Object.keys(newSchedule).forEach(semester => {
      newSchedule[semester] = newSchedule[semester].filter(course => course !== draggedCourse);
    });

    // Add to new location
    if (!newSchedule[targetSemester].includes(draggedCourse)) {
      newSchedule[targetSemester] = [...newSchedule[targetSemester], draggedCourse];
    }

    setSchedule(newSchedule);
    setDraggedCourse(null);
  };

  const removeCourse = (semester, courseCode) => {
    const newSchedule = { ...schedule };
    newSchedule[semester] = newSchedule[semester].filter(course => course !== courseCode);
    setSchedule(newSchedule);
  };

  const CourseCard = ({ courseCode, semester, isInSchedule = false }) => {
    const course = courseData[courseCode];
    if (!course) return null;

    const prereqCheck = checkPrerequisites(courseCode, semester);
    const hasPrereqIssues = !prereqCheck.met;

    return (
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, courseCode)}
        className={`p-3 rounded-lg border-2 cursor-move transition-all duration-200 ${
          hasPrereqIssues && isInSchedule
            ? 'border-red-300 bg-red-50'
            : 'border-gray-200 bg-white hover:border-jmuPurple hover:shadow-md'
        }`}
        onClick={() => setSelectedCourse(courseCode)}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="font-semibold text-sm text-gray-900">{courseCode}</div>
          <div className="text-xs text-gray-500">{course.credits} cr</div>
        </div>
        <div className="text-xs text-gray-600 leading-tight">{course.name}</div>
        {hasPrereqIssues && isInSchedule && (
          <div className="mt-2 text-xs text-red-600">
            Missing: {prereqCheck.missing.join(', ')}
          </div>
        )}
        {isInSchedule && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeCourse(semester, courseCode);
            }}
            className="mt-2 text-xs text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        )}
      </div>
    );
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Schedule Builder
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Plan your JMU Information Technology degree with interactive course scheduling and prerequisite validation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="jmu-section">
        <div className="jmu-container">
          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
            <h3 className="text-lg font-heading font-semibold text-blue-900 mb-2">How to Use</h3>
            <p className="text-blue-800 text-sm">
              Drag and drop courses between semesters to customize your schedule. 
              Red highlighting indicates prerequisite issues that need to be resolved.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Course Pool */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Available Courses</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">IT Electives</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {Object.keys(courseData)
                      .filter(code => code.startsWith('IT 3') || code.startsWith('IT 4'))
                      .filter(code => !['IT 301', 'IT 302', 'IT 311', 'IT 313', 'IT 333', 'IT 340', 'IT 347', 'IT 444', 'IT 445'].includes(code))
                      .map(courseCode => (
                        <CourseCard key={courseCode} courseCode={courseCode} />
                      ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Math Options</h4>
                  <div className="space-y-2">
                    <CourseCard courseCode="MATH 235" />
                    <CourseCard courseCode="MATH 229" />
                    <CourseCard courseCode="MATH 318" />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(schedule).map(([semester, courses]) => (
                  <div
                    key={semester}
                    className="bg-white rounded-lg shadow-md p-6"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, semester)}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-heading font-semibold text-gray-900">
                        {semester}
                      </h3>
                      <div className="text-sm text-gray-600">
                        {calculateCredits(courses)} credits
                      </div>
                    </div>
                    
                    <div className="space-y-3 min-h-32">
                      {courses.map(courseCode => (
                        <CourseCard 
                          key={courseCode} 
                          courseCode={courseCode} 
                          semester={semester}
                          isInSchedule={true}
                        />
                      ))}
                      {courses.length === 0 && (
                        <div className="text-gray-400 text-sm text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                          Drop courses here
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Degree Progress Summary */}
              <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">Degree Progress</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-jmuPurple">
                      {Object.values(schedule).flat().reduce((total, courseCode) => 
                        total + (courseData[courseCode]?.credits || 0), 0)}
                    </div>
                    <div className="text-sm text-gray-600">Total IT Credits Planned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-jmuGold">
                      {Object.values(schedule).flat().filter(code => 
                        code.startsWith('IT 3') || code.startsWith('IT 4')).length}
                    </div>
                    <div className="text-sm text-gray-600">Electives Selected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round((Object.values(schedule).flat().length / 17) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">Core Requirements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Notice */}
          <div className="mt-8 bg-lightGold border border-jmuGold rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-jmuPurple mb-2">Academic Planning Notice</h4>
                <p className="text-gray-700 text-sm">
                  This schedule builder is for planning purposes only. Course availability, prerequisites, 
                  and scheduling may vary. Please confirm your course selections and registration timeline 
                  with your assigned academic advisor before making final decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-heading font-semibold text-gray-900">
                {selectedCourse}
              </h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">{courseData[selectedCourse]?.name}</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Credits:</span> {courseData[selectedCourse]?.credits}
              </p>
              {courseData[selectedCourse]?.prerequisites.length > 0 && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Prerequisites:</span> {courseData[selectedCourse].prerequisites.join(', ')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </ProtectedRoute>
  );
};

export default Schedule;