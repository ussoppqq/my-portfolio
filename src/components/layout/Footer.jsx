import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Heart, Github, Linkedin, Mail, MapPin, Code } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { personalInfo } from '../../data/personal';
import { motion } from 'framer-motion';

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
    <circle cx="40" cy="40" r="4" className="node-circle"/>
    
    {/* Inner ring nodes */}
    <circle cx="40" cy="25" r="3" className="node-circle"/>
    <circle cx="53" cy="33" r="3" className="node-circle"/>
    <circle cx="53" cy="47" r="3" className="node-circle"/>
    <circle cx="40" cy="55" r="3" className="node-circle"/>
    <circle cx="27" cy="47" r="3" className="node-circle"/>
    <circle cx="27" cy="33" r="3" className="node-circle"/>
    
    {/* Outer ring nodes */}
    <circle cx="40" cy="15" r="2.5" className="node-circle"/>
    <circle cx="58" cy="23" r="2.5" className="node-circle"/>
    <circle cx="65" cy="40" r="2.5" className="node-circle"/>
    <circle cx="58" cy="57" r="2.5" className="node-circle"/>
    <circle cx="40" cy="65" r="2.5" className="node-circle"/>
    <circle cx="22" cy="57" r="2.5" className="node-circle"/>
    <circle cx="15" cy="40" r="2.5" className="node-circle"/>
    <circle cx="22" cy="23" r="2.5" className="node-circle"/>
    
    {/* Connections from center to inner ring */}
    <line x1="40" y1="40" x2="40" y2="25" className="connection-line"/>
    <line x1="40" y1="40" x2="53" y2="33" className="connection-line"/>
    <line x1="40" y1="40" x2="53" y2="47" className="connection-line"/>
    <line x1="40" y1="40" x2="40" y2="55" className="connection-line"/>
    <line x1="40" y1="40" x2="27" y2="47" className="connection-line"/>
    <line x1="40" y1="40" x2="27" y2="33" className="connection-line"/>
    
    {/* Connections from inner ring to outer ring */}
    <line x1="40" y1="25" x2="40" y2="15" className="connection-line"/>
    <line x1="40" y1="25" x2="58" y2="23" className="connection-line"/>
    <line x1="53" y1="33" x2="58" y2="23" className="connection-line"/>
    <line x1="53" y1="33" x2="65" y2="40" className="connection-line"/>
    <line x1="53" y1="47" x2="65" y2="40" className="connection-line"/>
    <line x1="53" y1="47" x2="58" y2="57" className="connection-line"/>
    <line x1="40" y1="55" x2="58" y2="57" className="connection-line"/>
    <line x1="40" y1="55" x2="40" y2="65" className="connection-line"/>
    <line x1="27" y1="47" x2="22" y2="57" className="connection-line"/>
    <line x1="40" y1="55" x2="22" y2="57" className="connection-line"/>
    <line x1="27" y1="47" x2="15" y2="40" className="connection-line"/>
    <line x1="27" y1="33" x2="15" y2="40" className="connection-line"/>
    <line x1="27" y1="33" x2="22" y2="23" className="connection-line"/>
    <line x1="40" y1="25" x2="22" y2="23" className="connection-line"/>
    
    {/* Additional curved connections for complexity */}
    <path d="M 58 23 Q 70 30 65 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 65 40 Q 70 50 58 57" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 58 57 Q 50 70 40 65" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 40 65 Q 30 70 22 57" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 22 57 Q 10 50 15 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 15 40 Q 10 30 22 23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 22 23 Q 30 10 40 15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M 40 15 Q 50 10 58 23" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);


const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Dynamic classes for light/dark theme
  const footerBg = theme === 'light'
    ? 'bg-white text-gray-900'
    : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white';
  const logoBg = theme === 'light'
    ? 'bg-gray-100 hover:bg-gray-200 shadow-md hover:shadow-lg'
    : 'bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl';
  const copyrightText = theme === 'light'
    ? 'text-gray-500'
    : 'text-gray-400';

  return (
    <footer className={`${footerBg} py-10 relative overflow-hidden px-10 py-8`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center mb-2 md:mb-0 md:mr-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.8 }
            }}
          >
            <MolecularLogo className="w-8 h-8 text-blue-400" />
          </motion.div>
        </motion.div>
        <p className={`${copyrightText} text-center w-full md:w-auto`}>&copy; 2025 Muhamad Yusuf Firizki.</p>
      </div>
    </footer>
  );
};

export default Footer;