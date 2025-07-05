import React from 'react';
import { Heart, Github, Linkedin, Mail, MapPin, Code } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { personalInfo } from '../../data/projects';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">JD</span>
              </motion.div>
              <span className="font-bold text-2xl gradient-text">John Doe</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions 
              that make a difference in people's lives.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, url: personalInfo.social.github, color: 'hover:bg-gray-700' },
                { icon: Linkedin, url: personalInfo.social.linkedin, color: 'hover:bg-blue-600' },
                { icon: Mail, url: `mailto:${personalInfo.email}`, color: 'hover:bg-red-500' }
              ].map(({ icon: Icon, url, color }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gray-800 rounded-xl ${color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-xl mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.portfolio'), path: '/portfolio' },
                { name: t('nav.resume'), path: '/resume' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-white transition-all duration-300 hover:text-blue-400"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-xl mb-6">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, text: personalInfo.location, href: null }
              ].map(({ icon: Icon, text, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2 flex-wrap">
            <span>&copy; 2024 John Doe. {t('footer.rights')}.</span>
            <span className="flex items-center space-x-1">
              <span>{t('footer.built')}</span>
              {/* <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>in Indonesia</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;