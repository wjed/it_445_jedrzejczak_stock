import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/staff', label: 'Staff' },
    { path: '/chat', label: 'Chat' },
    { path: '/games', label: 'Games' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-jmuPurple text-white sticky top-0 z-50 shadow-sm">
      <div className="jmu-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Title - JMU Style */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/JMU-Logo-CMYK-horiz-white.png" 
                alt="James Madison University" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block border-l border-jmuGold pl-4">
                <span className="text-xl font-semibold font-heading tracking-wide">
                  IT Advisor Bot
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - JMU Style */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 border-b-2 pb-1 ${
                    isActive(link.path)
                      ? 'text-jmuGold border-jmuGold'
                      : 'text-white border-transparent hover:text-jmuGold hover:border-jmuGold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side - Portal Switcher + Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* IT Portal Logo - Active */}
            <div className="flex items-center">
              <img 
                src="/james-madison-dukes-logo-png-transparent.png" 
                alt="IT Portal (Active)" 
                className="h-10 w-auto opacity-100"
                title="Currently in IT Portal"
              />
            </div>
            {/* CS Portal Logo - Clickable */}
            <Link to="/cs" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/james-madison-dukes-logo-png-transparent.png" 
                alt="Switch to CS Portal" 
                className="h-10 w-auto opacity-60 hover:opacity-100"
                title="Switch to CS Portal"
              />
            </Link>
            <AuthButton />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-jmuGold focus:outline-none"
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
        <div className="lg:hidden border-t border-jmuGold">
          <div className="jmu-container py-4">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-jmuGold'
                      : 'text-white hover:text-jmuGold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* CS Portal Link - Mobile */}
              <Link
                to="/cs"
                className="block text-sm font-medium uppercase tracking-wide text-white hover:text-jmuGold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🐕 Switch to CS Portal
              </Link>
              {/* Auth Button - Mobile */}
              <div className="pt-4 border-t border-jmuGold">
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;