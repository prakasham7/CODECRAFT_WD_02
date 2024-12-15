import React, { useState, useEffect } from 'react';
import { Home, Info, Phone, Mail, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: <Home size={20} />, text: 'Home', href: '#' },
    { icon: <Info size={20} />, text: 'About', href: '#about' },
    { icon: <Phone size={20} />, text: 'Contact', href: '#contact' },
    { icon: <Mail size={20} />, text: 'Blog', href: '#blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Logo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                href={item.href}
                icon={item.icon}
                text={item.text}
                scrolled={scrolled}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
            >
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}