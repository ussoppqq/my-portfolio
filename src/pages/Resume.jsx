import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code, Users, Award, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { personalInfo } from "../data/personal";
import { skills, getSkillsByCategory } from "../data/skills";

const Resume = () => {
    const { t, language } = useLanguage();

    const handleDownloadCV = () => {
        alert('CV downloaded functionality would be implemented here.');
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
                        {t('resume.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                    >
                        {t('resume.subtitle')}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        onClick={handleDownloadCV}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl font-medium"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        {t('resume.download')}
                    </motion.button>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/*left Column - Experience & Education */}
                    <div className="lg:col-span-2 spcae-y-16">
                        {/* Experience Section */}
                        <motion.section
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center mb-12">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center my-4">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    {t('resume.experience')}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {personalInfo.experience.map((exp, index) => (  
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="realtive pl-8 border-l-2 border-blue-200 dark:boder-blue-800 last:border-l-0"
                                >
                                    {/* Timeline Dot */}
                                    <motion.div
                                        whileHover={{ sclae: 1.2 }}
                                        className="absolute left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
                                    />

                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {exp.position}
                                            </h3>
                                            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                                                <Calendar className="w-4 h-4 text-gray-500" />
                                                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                                            {exp.company}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {exp.description[language]}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                            </div>
                        </motion.section>

                        {/* Education Section */}
                        <motion.section
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center mb-12">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                    {t('resume.education')}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {personalInfo.education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-2">
                                                    {edu.school}
                                                </p>
                                                <div className="flex items-center space-x-2">
                                                    <Award className="w-4 h-4 text-yellow-500" />
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        GPA: <span className="font-semibold">{edu.gpa}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-4 md:mt-0">
                                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-medium shadow-lg">
                                                    {edu.year}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column - Skills */}
                    <div className="space-y-8">
                        {/* Technical Skills */}
                        <motion.section
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                                    <Code className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('resume.technical')}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {['frontend', 'backend', 'mobile', 'design'].map((category) => (
                                    <motion.div
                                        key={category}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                                    >
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4 capitalize flex items-center">
                                            <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></span>
                                            {category}
                                        </h4>
                                        <div className="space-y-4">
                                            {getSkillsByCategory(category).map((skill) => (
                                                <div key={skill.name}>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                            {skill.name}
                                                        </span>
                                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-500">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, delay: 0.2 }}
                                                            className="h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative"
                                                        >
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Soft Skills */}
                        <motion.section
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-3">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('resume.soft')}
                                </h3>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                            >
                                <div className="space-y-4">
                                    {getSkillsByCategory('soft').map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm font-bold text-gray-500 dark:text-gray-500">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full relative"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.section>

                        {/* Certifications */}
                        <motion.section
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center mb-8">
                                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Certifications
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: 'AWS Certified Developer', year: '2023', icon: '☁️' },
                                    { name: 'Google Cloud Professional', year: '2023', icon: '🌐' },
                                    { name: 'React Advanced Certification', year: '2022', icon: '⚛️' },
                                    { name: 'MongoDB University', year: '2022', icon: '🍃' }
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{cert.icon}</span>
                                            <div>
                                                <p className="text-gray-900 dark:text-white font-medium">{cert.name}</p>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.year}</p>
                                            </div>
                                        </div>
                                        <Award className="w-5 h-5 text-yellow-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;