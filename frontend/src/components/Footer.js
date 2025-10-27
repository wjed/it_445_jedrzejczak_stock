import React from 'react';

const Footer = ({ csTheme = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`text-white mt-auto ${csTheme ? 'bg-csSlateGray' : 'bg-jmuPurple'}`}>
      {/* Accent line */}
      <div className={`h-1 ${csTheme ? 'bg-csIceBlue' : 'bg-jmuGold'}`}></div>
      
      <div className="jmu-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              {csTheme ? 'JMU CS Advisor Bot' : 'JMU IT Advisor Bot'}
            </h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              A comprehensive planning tool for James Madison University {csTheme ? 'Computer Science' : 'Information Technology'} students.
            </p>
            <div className={`bg-opacity-20 rounded p-4 ${csTheme ? 'bg-csIceBlue' : 'bg-jmuGold'}`}>
              <p className={`font-medium text-sm ${csTheme ? 'text-csIceBlue' : 'text-jmuGold'}`}>
                Please confirm all course selections with your academic advisor before you register.
              </p>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Capstone Project</h4>
            <div className="space-y-2 text-gray-200">
              <p>Created by Will Jedrzejczak and Brian Stock</p>
              <p>Advised by Professor Livia Griffith</p>
              <p>James Madison University</p>
              <p>Information Technology Major</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Academic Advising</h4>
            <div className="space-y-2 text-gray-200">
              {csTheme ? (
                <>
                  <p>Computer Science Department</p>
                  <p>Academic Advising</p>
                  <p>Computer Science</p>
                  <p>TBD - Contact Information</p>
                  <p>King Hall</p>
                  <p>701 Carrier Drive</p>
                  <p>Harrisonburg, VA 22807</p>
                </>
              ) : (
                <>
                  <p>Ellen Hedrick</p>
                  <p>Advisor and Outreach Coordinator</p>
                  <p>Information Technology</p>
                  <p>hedricme@jmu.edu</p>
                  <p>King Hall, MSC 4116</p>
                  <p>701 Carrier Drive</p>
                  <p>Harrisonburg, VA 22807</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} James Madison University. This is a student capstone project.
            </div>
            <div className="text-sm text-gray-300">
              <span className={csTheme ? 'text-csIceBlue' : 'text-jmuGold'}>•</span> Planning tool only, not official advising
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;