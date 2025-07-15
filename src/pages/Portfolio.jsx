import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  // Data projects yang disederhanakan
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      githubUrl: "https://github.com/johndoe/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web", 
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      githubUrl: "https://github.com/johndoe/taskapp"
    },
    {
      id: 3,
      title: "Chatbot Assistant",
      category: "ai",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      githubUrl: "https://github.com/johndoe/chatbot"
    },
    {
      id: 4,
      title: "Image Recognition",
      category: "ai",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      githubUrl: "https://github.com/johndoe/image-recognition"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      githubUrl: "https://github.com/johndoe/fitness-tracker"
    },
    {
      id: 6,
      title: "Weather App",
      category: "mobile",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      githubUrl: "https://github.com/johndoe/weather-app"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      githubUrl: "https://github.com/johndoe/portfolio"
    },
    {
      id: 8,
      title: "Expense Tracker",
      category: "mobile",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      githubUrl: "https://github.com/johndoe/expense-tracker"
    }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'ai', label: 'AI' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            A collection of projects I've worked on
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const categoryColors = {
    web: 'bg-blue-500',
    ai: 'bg-purple-500',
    mobile: 'bg-green-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize text-white ${categoryColors[project.category]} shadow-lg`}>
            {project.category}
          </span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        {/* GitHub Button */}
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
        >
          <Github className="w-4 h-4 mr-2" />
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Portfolio;