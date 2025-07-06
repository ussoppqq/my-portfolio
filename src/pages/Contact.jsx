import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Clock, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/personal';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
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
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: t('contact.info.email'),
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                    color: 'from-blue-600 to-cyan-600'
                  },
                  {
                    icon: Phone,
                    title: t('contact.info.phone'),
                    value: personalInfo.phone,
                    href: `tel:${personalInfo.phone}`,
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: MapPin,
                    title: t('contact.info.location'),
                    value: personalInfo.location,
                    href: null,
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: Clock,
                    title: 'Response Time',
                    value: 'Within 24 hours',
                    href: null,
                    color: 'from-orange-500 to-red-500'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.title}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-2 text-blue-600" />
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, url: personalInfo.social.github, color: 'hover:bg-gray-800', name: 'GitHub' },
                    { icon: Linkedin, url: personalInfo.social.linkedin, color: 'hover:bg-blue-600', name: 'LinkedIn' },
                    { icon: MessageSquare, url: personalInfo.social.whatsapp, color: 'hover:bg-green-500', name: 'WhatsApp' }
                  ].map(({ icon: Icon, url, color, name }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl ${color} text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                      title={name}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none placeholder-gray-500"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Heart className="w-4 h-4 text-red-500 mr-2" />
                    <span>I typically respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;