import React, { useState } from 'react';

const Staff = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const facultyData = [
    {
      id: 'el-tawab',
      name: 'Dr. Samy El-Tawab',
      title: 'Director and Professor',
      program: 'Information Technology',
      email: 'eltawass@jmu.edu',
      photo: '/el-tawab.jpg',
      category: 'faculty',
      education: [
        'Ph.D. in Computer Science, Old Dominion University (2012)',
        'M.Sc. in Computer Science and Automatic Control, Alexandria University (2006)',
        'B.Sc. in Computer Science and Automatic Control, Alexandria University (2002)'
      ],
      research: ['Intelligent Transportation', 'Mobile Development', 'Vehicular Ad-Hoc Networks', 'Wireless Sensor Networks', 'Network Security', 'IoT', 'Voice over IP', 'Cloud Computing'],
      courses: ['IT 160', 'IT 215', 'IT 311', 'IT 480'],
      experience: 'Program Director since Fall 2019, Full Professor since August 2024'
    },
    {
      id: 'hedrick',
      name: 'Ellen Hedrick',
      title: 'Advisor and Outreach Coordinator',
      program: 'Information Technology',
      email: 'hedricme@jmu.edu',
      photo: '/hedrick.jpg',
      category: 'staff',
      education: [
        'B.S. Education, James Madison University'
      ],
      experience: 'IT Academic Advisor since 2023, former Assistant Director of Undergraduate Admissions (2007-2023)',
      specialties: ['Academic Advising', 'Career Advising', 'College Student Development', 'First Generation Support']
    },
    {
      id: 'belsare',
      name: 'Dr. Prajakta Belsare',
      title: 'Assistant Professor',
      program: 'Information Technology',
      email: 'belsarpp@jmu.edu',
      photo: '/belsare.png',
      category: 'faculty',
      education: [
        'Ph.D. in Electrical and Computer Engineering, The University of Alabama (2021)',
        'M.E. in Electronics and Telecommunications, University of Pune, India (2013)',
        'B.E. in Electronics and Telecommunications, University of Pune, India (2011)'
      ],
      research: ['Wearable Sensors', 'Behavior Modeling', 'Data Science', 'Machine Learning', 'Signal Processing'],
      courses: ['IT 101', 'IT 203', 'Data Structures and Algorithms', 'Object-oriented Programming'],
      experience: 'Assistant Professor since 2023, former NSF-Computing Innovation Fellow at Dartmouth College'
    },
    {
      id: 'griffith',
      name: 'Livia Griffith',
      title: 'Lecturer',
      program: 'Information Technology',
      email: 'griffils@jmu.edu',
      photo: '/griffith-livia.jpg',
      category: 'faculty',
      education: [
        'M.S. Computer Science, James Madison University (2014)',
        'B.S. Management Information Systems, James Madison University (1983)'
      ],
      research: ['Cloud Computing and Security', 'Systems Administration', 'Networking', 'IT Ethics and Society'],
      courses: ['IT 101', 'IT 240', 'IT 302', 'IA 605'],
      experience: 'Lecturer since 2020, former IT Director for CISE (2013-2024)'
    },
    {
      id: 'hamdan',
      name: 'Nareman Hamdan',
      title: 'Lecturer',
      program: 'Information Technology',
      email: 'hamdanna@jmu.edu',
      photo: '/hamdan.jpg',
      category: 'faculty',
      education: [
        'M.A. in Secure Software Engineering, James Madison University (2008)',
        'B.A. in Computer Science, Al al-bayt University - Jordan (2000)'
      ],
      research: ['Database', 'HCI'],
      courses: ['IT 201', 'IT 240', 'IT 301', 'IT 347', 'Math 155', 'CS 139'],
      experience: 'Visiting Faculty since 2024, Adjunct Faculty (2015-2024)'
    },
    {
      id: 'hasan',
      name: 'Dr. Moh Khalid Hasan',
      title: 'Assistant Professor',
      program: 'Information Technology',
      email: 'dwtn6r@jmu.edu',
      photo: '/hasan.png',
      category: 'faculty',
      education: [
        'Ph.D. in Electrical Engineering, Stevens Institute of Technology (2025)',
        'M.Sc. in Electronics Engineering, Kookmin University, South Korea (2019)',
        'B.Sc. in Electrical and Electronic Engineering, Khulna University, Bangladesh (2017)'
      ],
      research: ['Wireless Security', 'Cyber-physical Systems', 'Autonomous UAV Networks', 'Cognitive Radio Systems', 'Machine Learning for Network Optimization'],
      experience: 'Research focused on cognitive radio networks and physical layer security'
    },
    {
      id: 'lee',
      name: 'Dr. Suk Jin Lee',
      title: 'Associate Professor',
      program: 'Information Technology',
      email: 'lee43sj@jmu.edu',
      photo: '/lee.jpg',
      category: 'faculty',
      education: [
        'Ph.D. in Electrical & Computer Engineering, Virginia Commonwealth University (2012)',
        'M.E. in Telematics Engineering, Pukyong National University, South Korea (2005)',
        'B.E. in Electronic Engineering, Pukyong National University, South Korea (2003)'
      ],
      research: ['Internet of Things', 'Network Protocols', 'Computer Vision', 'Machine Learning/Neural Networks', 'Target Tracking'],
      courses: ['Computer Networks', 'Mobile App Development', 'IoT', 'Database Design'],
      experience: 'Associate Professor since 2023, former faculty at Columbus State University'
    },
    {
      id: 'salib',
      name: 'Dr. Emil Salib',
      title: 'Professor',
      program: 'Information Technology',
      email: 'salibeh@jmu.edu',
      photo: '/salib.jpg',
      category: 'faculty',
      education: [
        'Ph.D. in Solid State Physics, University of Wollongong, Australia',
        'M.S. in Telecommunications Networks, Cairo University, Egypt',
        'B.S. in Electrical Engineering, Cairo University, Egypt',
        'B.S. in Physics, Cairo University, Egypt'
      ],
      research: ['DevOps Automation', 'Cloud Computing', 'Software Defined Networks', 'Wireless Security', 'Blockchain'],
      courses: ['IT 215', 'IT 240', 'IT 301', 'IT 313', 'IT 333', 'IT 444', 'IT 445', 'IT 460', 'IT 461', 'IT 465'],
      experience: 'Professor with extensive industry experience at Ericsson/Telcordia Technologies'
    },
    {
      id: 'salman',
      name: 'Dr. Ahmad Salman',
      title: 'Associate Professor',
      program: 'Information Technology',
      email: 'salmanaa@jmu.edu',
      photo: '/salman.jpg',
      category: 'faculty',
      education: [
        'Ph.D. in Computer Engineering, George Mason University (2017)',
        'M.S. in Computer Engineering, George Mason University (2011)',
        'B.Sc. Computer Engineering, University of Arab Academy for Science and Technology (2002)'
      ],
      research: ['Security of IoT', 'Cybersecurity using AI', 'Hardware Security', 'UAV Security', 'Network Security'],
      courses: ['IT 201', 'IT 203', 'IT 212', 'IT 215', 'IT 313', 'IT 435'],
      experience: 'Associate Professor specializing in Cybersecurity and Hardware Security'
    },
    {
      id: 'byrd',
      name: 'Dr. Vetria Byrd',
      title: 'Department Head and Associate Professor',
      program: 'Computer Science',
      email: 'byrdvl@jmu.edu',
      photo: '/byrd.jpg',
      category: 'leadership',
      education: [
        'Ph.D. Computing and Information Sciences, University of Alabama at Birmingham (2010)',
        'M.S. Computing and Information Sciences, University of Alabama at Birmingham (2006)',
        'M.S. Biomedical Engineering, University of Alabama at Birmingham (1995)',
        'B.S. Computing and Information Sciences, University of Alabama at Birmingham (1992)'
      ],
      research: ['Data Visualization', 'Data Science', 'High Performance Computing', 'Visual Analytics'],
      experience: 'Department Head, former Associate Professor at Purdue University'
    },
    {
      id: 'abdelsalam',
      name: 'Mo Abdelsalam',
      title: 'IT Systems Admin',
      program: 'Information Technology',
      email: 'abdelsma@jmu.edu',
      photo: '/abdelsalam.png',
      category: 'staff',
      education: [
        'Master\'s in Business Administration',
        'Bachelor of Science in Communications and Electronics'
      ],
      experience: 'Systems/Network Administrator with expertise in Mobile Communications and GSM Network Architecture'
    },
    {
      id: 'bergen',
      name: 'Kaitlyn Bergen',
      title: 'Office Manager',
      program: 'Computer Science',
      email: 'bergenkm@jmu.edu',
      photo: '/bergen.png',
      category: 'staff',
      education: [
        'M.S. Nazareth University (2021)',
        'B.A. College of William and Mary (2014)'
      ],
      experience: 'Office Manager for Computer Science Department'
    },
    {
      id: 'whetzel',
      name: 'Justin Whetzel',
      title: 'Office Services Specialist',
      program: 'Computer Science',
      email: 'whetzejr@jmu.edu',
      photo: '/whetzel-justin.jpeg',
      category: 'staff',
      education: [
        'B.S. Psychology, James Madison University (2014)'
      ],
      experience: 'Office Services Specialist for Computer Science Department'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Staff', count: facultyData.length },
    { id: 'faculty', label: 'Faculty', count: facultyData.filter(p => p.category === 'faculty').length },
    { id: 'leadership', label: 'Leadership', count: facultyData.filter(p => p.category === 'leadership').length },
    { id: 'staff', label: 'Staff', count: facultyData.filter(p => p.category === 'staff').length }
  ];

  const filteredFaculty = selectedCategory === 'all' 
    ? facultyData 
    : facultyData.filter(person => person.category === selectedCategory);

  const FacultyCard = ({ person }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-3 border-jmuPurple">
            <img 
              src={person.photo} 
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
              {person.name}
            </h3>
            <p className="text-sm text-jmuPurple font-medium mb-1">{person.title}</p>
            <p className="text-sm text-gray-600 mb-2">{person.program}</p>
            <p className="text-sm text-gray-600">
              <a href={`mailto:${person.email}`} className="text-jmuPurple hover:underline">
                {person.email}
              </a>
            </p>
          </div>
        </div>

        {person.research && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Research Areas</h4>
            <div className="flex flex-wrap gap-1">
              {person.research.slice(0, 4).map((area, index) => (
                <span key={index} className="bg-jmuPurple text-white px-2 py-1 rounded-full text-xs">
                  {area}
                </span>
              ))}
              {person.research.length > 4 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{person.research.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {person.courses && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Courses</h4>
            <p className="text-xs text-gray-600">
              {person.courses.slice(0, 3).join(', ')}
              {person.courses.length > 3 && ` +${person.courses.length - 3} more`}
            </p>
          </div>
        )}

        {person.specialties && (
          <div className="mt-3">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Specialties</h4>
            <p className="text-xs text-gray-600">{person.specialties.join(', ')}</p>
          </div>
        )}

        {person.experience && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 italic">{person.experience}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-jmuOffWhite">
      {/* Page Header */}
      <section className="bg-jmuPurple text-white py-16">
        <div className="jmu-container text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Faculty & Staff
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Meet the dedicated team of educators, researchers, and support staff who make the JMU Information Technology program exceptional.
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
                World-Class Faculty in Information Technology
              </h2>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Our faculty bring diverse expertise from industry and academia, with research spanning cybersecurity, 
                IoT, machine learning, networking, and emerging technologies. They are committed to both cutting-edge 
                research and exceptional undergraduate education.
              </p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-jmuGold text-2xl font-bold">{facultyData.filter(p => p.category === 'faculty').length}</div>
                  <div className="text-sm">Faculty Members</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">15+</div>
                  <div className="text-sm">Research Areas</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">25+</div>
                  <div className="text-sm">Courses Offered</div>
                </div>
                <div>
                  <div className="text-jmuGold text-2xl font-bold">100%</div>
                  <div className="text-sm">Ph.D. Faculty</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-jmuPurple text-white'
                    : 'bg-white text-jmuPurple border-2 border-jmuPurple hover:bg-jmuPurple hover:text-white'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredFaculty.map(person => (
              <FacultyCard key={person.id} person={person} />
            ))}
          </div>

          {/* Research Excellence */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Research Excellence & Industry Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-jmuPurple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  🔬
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Active Research</h4>
                <p className="text-gray-600 text-sm">
                  Faculty actively publish in top-tier conferences and journals, bringing cutting-edge knowledge to the classroom.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-jmuGold rounded-full flex items-center justify-center text-jmuPurple text-2xl font-bold mx-auto mb-4">
                  🏢
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Industry Experience</h4>
                <p className="text-gray-600 text-sm">
                  Many faculty have extensive industry backgrounds at companies like Ericsson, IBM, and leading tech firms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-jmuPurple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  🎓
                </div>
                <h4 className="font-heading font-semibold text-gray-900 mb-2">Student Success</h4>
                <p className="text-gray-600 text-sm">
                  Dedicated to mentoring students through research projects, internships, and career development.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Notice */}
          <div className="bg-lightGold border border-jmuGold rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-jmuPurple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">📧</span>
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-jmuPurple mb-2">Connect with Faculty</h4>
                <p className="text-gray-700 text-sm">
                  Faculty welcome student inquiries about research opportunities, course questions, and career guidance. 
                  Feel free to reach out via email to schedule office hours or discuss your academic interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;