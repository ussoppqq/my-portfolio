import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const personalInfo = {
    education: [
        {
            degree: 'Bachelor of Computer Science',
            school: 'University of Technology',
            gpa: '3.85',
            year: '2020-2024'
        }
    ]
};

export const skills = [
    // Frontend
    { name: 'React', category: 'frontend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', category: 'frontend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'JavaScript', category: 'frontend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    // Backend
    { name: 'Node.js', category: 'backend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', category: 'backend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', category: 'backend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Python', category: 'backend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', category: 'backend', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    // Mobile
    { name: 'React Native', category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Expo', category: 'mobile', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
    // Design
    { name: 'Figma', category: 'design', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    // Soft Skills
    { name: 'Team Leadership', category: 'soft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { name: 'Problem Solving', category: 'soft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'Communication', category: 'soft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { name: 'Project Management', category: 'soft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { name: 'Agile/Scrum', category: 'soft', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
];

const certifications = [
    {
        name: 'Belajar Dasar Cloud dan Gen AI di AWS',
        year: '2025',
        image: '/sertifikat/AI-aws-dicoding.png',
        issuer: 'Dicoding',
        url: 'https://drive.google.com/file/d/1oXqd1tnC2FmsonHhQGHhwTLpw2K8GfIJ/view?usp=sharing'
    },
    {
        name: 'Exhibition of Economic Survival',
        year: '2024',
        image: '/sertifikat/economic-survival.png',
        issuer: 'President University',
        url: 'https://drive.google.com/file/d/1LbpTjwcOVyjiof-9gSbnqtlJH7EjYL6_/view?usp=sharing'
    },
    {
        name: 'Prompt Engineering with Azure OpenAI Service',
        year: '2025',
        image: '/sertifikat/azure-openAi-service.png',
        issuer: 'Digitalent',
        url: 'https://drive.google.com/file/d/1eL8vYjKTllOmghJuQPH4myfAHjX6MrnB/view?usp=sharing'
    },
    {
        name: 'Linear Models in Machine Learning: Fundamentals',
        year: '2025',
        image: '/sertifikat/Linear_Models_Machine_Learning_Fundamentals.png',
        issuer: 'Digitalent',
        url: 'https://drive.google.com/file/d/12i6wZaiiHQOAMJlq705KW6WyH9hiDnf5/view?usp=sharing'
    }
];

export const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
};

const Resume = () => {
    const { t } = useLanguage();

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Muhamad Yusuf Firizki-cv(1).pdf'; 
        link.download = '/Muhamad Yusuf Firizki-cv(1).pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCertificationClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
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
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
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

            <div className="max-w-4xl mx-auto px-4 pb-20">
                {/* Technical Skills Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            {t('resume.technical')}
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        {t('resume.desc')} {/* Reusing subtitle for consistency */}
                    </p>

                    {/* Programming Languages */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
                            {t('resume.programming')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {[
                                { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                                { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                                { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                                { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                                { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg border border-gray-600"
                                >
                                    <img src={skill.image} alt={skill.name} className="w-10 h-10 mb-3" />
                                    <span className="font-medium text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* AI Tools */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
                            {t('resume.ai_tools')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: 'OpenCV', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
                                { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                                { name: 'PyTorch', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                                { name: 'Hugging Face', image: 'https://huggingface.co/datasets/huggingface/brand/resolve/main/huggingface_logo.png' }
                            ].map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg border border-gray-600"
                                >
                                    <img src={tool.image} alt={tool.name} className="w-10 h-10 mb-3" />
                                    <span className="font-medium text-center">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
                            {t('resume.web_dev')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                            {[
                                { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                                { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                                { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                                { name: 'Vite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
                                { name: 'Laravel', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/laravel.svg' },
                                { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                                { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                                { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                                { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                                { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tailwindcss.svg' }
                            ].map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg border border-gray-600"
                                >
                                    <img src={tool.image} alt={tool.name} className="w-10 h-10 mb-3" />
                                    <span className="font-medium text-center text-sm">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Design Tools */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
                            {t('resume.design_tools')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {getSkillsByCategory('design').map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gray-800 dark:bg-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-lg border border-gray-600"
                                >
                                    <img src={skill.image} alt={skill.name} className="w-10 h-10 mb-3" />
                                    <span className="font-medium text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Certifications Cards */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <div className="flex items-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {t('resume.certifications')}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
                                className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-2xl hover:shadow-3xl border border-gray-200 dark:border-gray-700 transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="flex flex-col items-center flex-1 w-full">
                                    <div className="relative w-full aspect-[4/3] rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 p-1 mb-4">
                                        <div className="w-full h-full rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="text-center w-full flex-1 flex flex-col justify-start">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {cert.year}
                                        </p>
                                    </div>
                                    <div className="mt-2" />
                                    <motion.button
                                        onClick={() => handleCertificationClick(cert.url)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex justify-center items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 gap-2"
                                        style={{ marginTop: 'auto' }}
                                    >
                                        {t('resume.view_certificate')}
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Resume;