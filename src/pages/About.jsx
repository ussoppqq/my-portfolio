import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Heart, Award, Target, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/personal';

const About = () => {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-6"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-8xl font-bold text-white">US</span>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <Code className="w-8 h-8 text-blue-600" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <Heart className="w-8 h-8 text-red-500" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-8"
            >
              {/* Bio */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Users className="w-8 h-8 mr-3 text-blue-600" />
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {personalInfo.bio[language]}
                </p>
              </motion.div>

              {/* Why Technology */}
              {/* <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-purple-600" />
                  {t('about.why_tech')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('about.tech_story')}
                </p>
              </motion.div> */}

              {/* Quick Facts */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Location', value: personalInfo.location, icon: '📍' },
                    { label: 'Instagram', value: "instagram.com/ussoppqq", icon: '📸' },
                    { label: 'Email', value: personalInfo.email, icon: '📧' },
                    { label: 'Phone', value: personalInfo.phone, icon: '📱' }
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{fact.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {fact.label}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {fact.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 mr-4" />
              {t('about.education')}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {personalInfo.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      GPA: <span className="font-semibold">{edu.gpa}</span>
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;