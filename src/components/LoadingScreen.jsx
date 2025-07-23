import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Preparing Experience...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete && onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      <div className="text-center space-y-8">
        {/* Logo Animation dengan Molecular Network */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 mx-auto"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <MolecularLogo className="w-20 h-20 text-blue-600" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <div className="h-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-medium text-gray-700 dark:text-gray-300"
            >
              {loadingTexts[currentText]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full relative"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: [-100, 400] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-20 skew-x-12"
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-blue-400' : 
              i % 3 === 1 ? 'bg-purple-400' : 'bg-teal-400'
            }`}
            style={{
              left: `${20 + i * 10}%`,
              top: '60%'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;