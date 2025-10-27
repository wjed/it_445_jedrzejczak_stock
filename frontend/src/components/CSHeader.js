import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

const CSHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/cs', label: 'Home' },
    { path: '/cs/courses', label: 'Courses' },
    { path: '/cs/schedule', label: 'Schedule' },
    { path: '/cs/staff', label: 'Staff' },
    { path: '/cs/chat', label: 'Chat' },
    { path: '/cs/games', label: 'Games' },
    { path: '/cs/faq', label: 'FAQ' },
    { path: '/cs/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-csSlateGray text-white sticky top-0 z-50 shadow-sm">
      <div className="jmu-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Title - CS Style */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/cs" className="flex items-center space-x-4">
              <img 
                src="/JMU-Logo-CMYK-horiz-white.png" 
                alt="James Madison University" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block border-l border-csIceBlue pl-4">
                <span className="text-xl font-semibold font-heading tracking-wide">
                  CS Advisor Bot
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - CS Style */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 border-b-2 pb-1 ${
                    isActive(link.path)
                      ? 'text-csIceBlue border-csIceBlue'
                      : 'text-white border-transparent hover:text-csIceBlue hover:border-csIceBlue'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side - Portal Switcher + Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* IT Portal Logo - Clickable */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/james-madison-dukes-logo-png-transparent.png" 
                alt="Switch to IT Portal" 
                className="h-10 w-auto opacity-60 hover:opacity-100"
                title="Switch to IT Portal"
              />
            </Link>
            {/* CS Portal Logo - Active */}
            <div className="flex items-center">
              <img 
                src="/james-madison-dukes-logo-png-transparent.png" 
                alt="CS Portal (Active)" 
                className="h-10 w-auto opacity-100"
                title="Currently in CS Portal"
              />
            </div>
            <AuthButton csTheme={true} />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-csIceBlue focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-csIceBlue">
          <div className="jmu-container py-4">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-csIceBlue'
                      : 'text-white hover:text-csIceBlue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Back to IT Portal - Mobile */}
              <Link
                to="/"
                className="block text-sm font-medium uppercase tracking-wide text-white hover:text-csIceBlue transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🐕 Switch to IT Portal
              </Link>
              {/* Auth Button - Mobile */}
              <div className="pt-4 border-t border-csIceBlue">
                <AuthButton csTheme={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default CSHeader;