import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

const Home = () => {
  const language = 'id';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        {/* Primary gradient mesh */}
        {/* <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/60 via-purple-200/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-purple-200/50 via-pink-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        </div> */}
        
        {/* Geometric grid overlay */}
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

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/50 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-48 right-20 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-60 left-1/2 w-2 h-2 bg-indigo-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
          <div className="absolute top-1/3 left-16 w-1 h-1 bg-violet-400/60 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.8s' }}></div>
        </div>

        {/* Subtle radial patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
          <div className="w-full h-full rounded-full border-4 border-dashed border-blue-400 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-400 animate-spin-reverse-slow"></div>
        </div>
        
        <div className="absolute bottom-20 left-16 w-24 h-24 opacity-15">
          <div className="w-full h-full rounded-full border-2 border-dotted border-pink-400 animate-pulse"></div>
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light"></div>
      </div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 via-purple-400/15 to-pink-400/10 rounded-full blur-2xl opacity-80 animate-pulse" 
               style={{ animation: 'float 8s ease-in-out infinite' }}></div>
          <div className="absolute top-60 right-10 w-48 h-48 bg-gradient-to-r from-cyan-400/15 via-blue-400/20 to-indigo-400/15 rounded-full blur-2xl opacity-60"
               style={{ animation: 'float 10s ease-in-out infinite reverse' }}></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-400/15 via-pink-400/10 to-rose-400/15 rounded-full blur-2xl opacity-50"
               style={{ animation: 'float 9s ease-in-out infinite' }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content - Enhanced */}
            <div className="space-y-10 transform hover:scale-[1.02] transition-all duration-700">
              {/* Greeting */}
              <div className="relative">
                <p className="text-lg font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent uppercase tracking-wider">
                  Hai, I am
                </p>
                <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {/* Name with enhanced styling */}
              <div className="relative">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
                    {personalInfo.name}
                  </span>
                </h1>
                {/* Subtle text shadow effect */}
                <div className="absolute inset-0 text-4xl lg:text-6xl font-bold leading-tight tracking-tight opacity-10 blur-sm">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </div>
              </div>

              {/* Title with decorative line */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {personalInfo.title}
                  </span>
                </h2>
                <div className="flex items-center space-x-3">
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                </div>
              </div>

              {/* Enhanced Description */}
              {/* <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                {personalInfo.about[language] || personalInfo.about.id}
              </p> */}

              {/* Enhanced Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"> */}
                  {/* Button shine effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative font-bold">Lihat Portofolio</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </button>

                <button className="group inline-flex items-center px-10 py-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-3xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                  <span className="font-bold">Hubungi Saya</span>
                  <Mail className="w-6 h-6 ml-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div> */}

              {/* Enhanced Social Links */}
              <div className="flex space-x-6 pt-8">
                {[ 
                  { icon: Github, url: personalInfo.social.github, color: 'hover:bg-gray-800 hover:shadow-gray-500/30', label: 'GitHub' },
                  { icon: Linkedin, url: personalInfo.social.linkedin, color: 'hover:bg-blue-600 hover:shadow-blue-500/30', label: 'LinkedIn' },
                  { icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:bg-red-500 hover:shadow-red-500/30', label: 'Email' },
                ].map(({ icon: Icon, url, color, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl ${color} text-gray-900 dark:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2`}
                    title={label}
                  >
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Profile */}
            <div className="relative flex justify-center">
              <div className="relative w-[420px] h-[420px] group">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-80 shadow-2xl animate-bounce-slow transform rotate-12"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-70 shadow-xl animate-bounce-slow transform -rotate-12" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-16 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-20 -right-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Profile image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 group-hover:scale-105 transition-transform duration-700">
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    {/* Profile image */}
                    <img
                      src="/Data-Master-(AUSG)-Muhammad_Yusuf_Firizki.png"
                      alt="Foto Profil Yusuf Firizki"
                      className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900"
                    />
                    {/* Image overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                  </div>
                </div>

                {/* Pulsing glow effect */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-10px) rotate(var(--tw-rotate)); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-slow 25s linear infinite reverse;
        }
        
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Home;