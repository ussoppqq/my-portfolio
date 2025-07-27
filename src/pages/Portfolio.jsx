import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Filter, ExternalLink, Calendar, Star, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = React.memo(({ project, index, language }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const categoryConfig = {
    web: { 
      gradient: 'from-blue-500 to-blue-600', 
      bgGlow: 'from-blue-400/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      icon: '🌐'
    },
    ai: { 
      gradient: 'from-purple-500 to-purple-600', 
      bgGlow: 'from-purple-400/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      icon: '🤖'
    },
    mobile: { 
      gradient: 'from-green-500 to-green-600', 
      bgGlow: 'from-green-400/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      icon: '📱'
    },
  };

  const config = categoryConfig[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${config.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      {/* Main card container with flex layout for sticky footer */}
      <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 group-hover:shadow-xl transition-all duration-500 flex flex-col h-full">

        {/* Image section */}
        <div className="relative overflow-hidden h-48">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-4xl text-gray-400 dark:text-gray-500">{config.icon}</div>
            </div>
          )}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div 
              className={`w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-6xl text-gray-400 dark:text-gray-500">
                {config.icon}
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content section with flex-grow to push button down */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Description with justified text and smaller font */}
          <div className="min-h-[4rem] mb-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">
              {project.description?.[language]}
            </p>
          </div>

          <div className="flex-grow" />

          {/* GitHub button at the bottom */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mt-4"
          >
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="relative flex items-center space-x-2">
              <Github className="w-4 h-4 transition-transform group-hover/btn:rotate-12 duration-300" />
              <span className="text-sm">View on GitHub</span>
            </div>
          </motion.a>
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
});

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const { language, t } = useLanguage();

  const categories = [
    { key: 'all', label: t('portfolio.all'), count: projects.length },
    { key: 'web', label: t('portfolio.web'), count: projects.filter(p => p.category === 'web').length },
    { key: 'ai', label: t('portfolio.ai'), count: projects.filter(p => p.category === 'ai').length },
    { key: 'mobile', label: t('portfolio.mobile'), count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-200/50 via-pink-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        </div> */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-gray-400 dark:border-gray-600"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8 w-full">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="border-b border-gray-400 dark:border-gray-600"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('portfolio.title')}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => setFilter(category.key)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-3 ${
                    filter === category.key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 shadow-lg backdrop-blur-xl'
                  }`}
                >
                  {filter === category.key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 -z-10"></div>
                  )}
                  <span className="text-lg">{category.label}</span>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    filter === category.key 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {category.count}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-0 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} language={language} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                No projects found in this category. Try selecting a different filter.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-shadow duration-300"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
};

export default Portfolio;