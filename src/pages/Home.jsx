import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'; // Removed unused icons
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/personal';

const Home = () => {
  const { t, language } = useLanguage(); // Destructure language along with t

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 font-medium"
              >
                Hai, Saya
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                  {personalInfo.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              >
                {personalInfo.about[language] || personalInfo.about.id} {/* Use language from context */}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  <span className="font-medium">Lihat Portofolio</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="font-medium">Hubungi Saya</span>
                  <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-4 pt-4"
              >
                {[
                  { icon: Github, url: personalInfo.social.github, color: 'hover:bg-gray-800' },
                  { icon: Linkedin, url: personalInfo.social.linkedin, color: 'hover:bg-blue-600' },
                  { icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:bg-red-500' },
                ].map(({ icon: Icon, url, color }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl ${color} text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative w-96 h-96 mx-auto">
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity },
                  }}
                  className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                    y: [0, -20, 0],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    y: { duration: 3, repeat: Infinity },
                  }}
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-20"
                />

                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                    <img
                      src="src/assets/Data-Master-(AUSG)-Muhammad _Yusuf_Firizki.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Gradient Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tools and technologies I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Tailwind'].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {tech}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;