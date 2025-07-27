import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const MolecularLogo = ({ className = "" }) => (
  <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        {`
          .node-circle {
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            opacity: 0.9;
          }
          .connection-line {
            stroke: currentColor;
            stroke-width: 1.5;
            opacity: 0.7;
          }
        `}
      </style>
    </defs>

    {/* Center node */}
    <circle cx="40" cy="40" r="4" className="node-circle" />

    {/* Inner ring nodes */}
    <circle cx="40" cy="25" r="3" className="node-circle" />
    <circle cx="53" cy="33" r="3" className="node-circle" />
    <circle cx="53" cy="47" r="3" className="node-circle" />
    <circle cx="40" cy="55" r="3" className="node-circle" />
    <circle cx="27" cy="47" r="3" className="node-circle" />
    <circle cx="27" cy="33" r="3" className="node-circle" />

    {/* Outer ring nodes */}
    <circle cx="40" cy="15" r="2.5" className="node-circle" />
    <circle cx="58" cy="23" r="2.5" className="node-circle" />
    <circle cx="65" cy="40" r="2.5" className="node-circle" />
    <circle cx="58" cy="57" r="2.5" className="node-circle" />
    <circle cx="40" cy="65" r="2.5" className="node-circle" />
    <circle cx="22" cy="57" r="2.5" className="node-circle" />
    <circle cx="15" cy="40" r="2.5" className="node-circle" />
    <circle cx="22" cy="23" r="2.5" className="node-circle" />

    {/* Connections from center to inner ring */}
    <line x1="40" y1="40" x2="40" y2="25" className="connection-line" />
    <line x1="40" y1="40" x2="53" y2="33" className="connection-line" />
    <line x1="40" y1="40" x2="53" y2="47" className="connection-line" />
    <line x1="40" y1="40" x2="40" y2="55" className="connection-line" />
    <line x1="40" y1="40" x2="27" y2="47" className="connection-line" />
    <line x1="40" y1="40" x2="27" y2="33" className="connection-line" />

    {/* Connections from inner ring to outer ring */}
    <line x1="40" y1="25" x2="40" y2="15" className="connection-line" />
    <line x1="40" y1="25" x2="58" y2="23" className="connection-line" />
    <line x1="53" y1="33" x2="58" y2="23" className="connection-line" />
    <line x1="53" y1="33" x2="65" y2="40" className="connection-line" />
    <line x1="53" y1="47" x2="65" y2="40" className="connection-line" /> {/* Perbaikan di sini */}
    <line x1="53" y1="47" x2="58" y2="57" className="connection-line" />
    <line x1="40" y1="55" x2="58" y2="57" className="connection-line" />
    <line x1="40" y1="55" x2="40" y2="65" className="connection-line" />
    <line x1="27" y1="47" x2="22" y2="57" className="connection-line" />
    <line x1="40" y1="55" x2="22" y2="57" className="connection-line" />
    <line x1="27" y1="47" x2="15" y2="40" className="connection-line" />
    <line x1="27" y1="33" x2="15" y2="40" className="connection-line" />
    <line x1="27" y1="33" x2="22" y2="23" className="connection-line" />
    <line x1="40" y1="25" x2="22" y2="23" className="connection-line" />

    {/* Additional curved connections for complexity */}
    <path d="M 58 23 Q 70 30 65 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 65 40 Q 70 50 58 57" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 58 57 Q 50 70 40 65" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 40 65 Q 30 70 22 57" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 22 57 Q 10 50 15 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 15 40 Q 10 30 22 23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 22 23 Q 30 10 40 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M 40 15 Q 50 10 58 23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event triggered, window.scrollY:', window.scrollY); // Debugging
      setScrolled(window.scrollY > 50);

      const sections = ['#home', '#about', '#portfolio', '#resume', '#contact'];
      let currentSection = '#home';

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log(`Section: ${section}, Top: ${rect.top}, Bottom: ${rect.bottom}, Height: ${element.offsetHeight}`); // Debugging
          const offset = window.innerHeight / 2;
          if (rect.top <= offset && rect.bottom > 0) {
            currentSection = section;
            console.log(`Active section set to: ${currentSection}`); // Debugging
          }
        } else {
          console.log(`Element not found for ${section}`); // Debugging
        }
      });

      if (activeTab !== currentSection) {
        setActiveTab(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil sekali saat mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.resume'), href: '#resume' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setActiveTab(href);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-1 group">
          <div className="flex-shrink-0">
            <MolecularLogo className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
          </div>
          <span className="font-bold text-xl gradient-text group-hover:scale-105 transition-transform">
            ussoppqq
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${activeTab === item.href
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
            >
              {item.name}
              {activeTab === item.href && (
                <motion.div
                  layoutId="activeTab"
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-200 dark:border-blue-800"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 px-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Globe className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-2xl"
          >
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${activeTab === item.href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;