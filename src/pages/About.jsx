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
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Sophisticated Background Pattern (dari Home) */}
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
              className="relative flex flex-col items-center justify-center"
            >
              <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-lg animate-spin-slow"></div>
                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center">
                  <img
                    src="/Muhamad_Yusuf_Firizki.jpg"
                    alt="Foto Profil Yusuf Firizki"
                    className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{personalInfo.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{personalInfo.title}</p>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center mb-8">
                  <Users className="w-8 h-8 mr-3 text-blue-600" />
                  About Me
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  {personalInfo.bio[language]}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* <section className="py-16 px-4">
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
      </section> */}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blob {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;