import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log('Contact translations:', {
    title: t('contact.title'),
    subtitle: t('contact.subtitle'),
    form_name: t('contact.form.name'),
    form_send: t('contact.form.send'),
    info_email: t('contact.info.email')
  }); // Debug translations

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert(t('contact.form.fill_fields'));
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      alert(t('contact.form.success_message'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert(t('contact.form.error_message') || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 translate-y-5 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              {t('contact.title')}
            </h1>
          </div>
          <div className="opacity-0 translate-y-5 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="opacity-0 -translate-x-12 animate-slide-in-left space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {t('contact.desc')}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: t('contact.info.email'),
                    value: personalInfo.email,
                    href: `mailto:${personalInfo.email}`,
                    color: 'from-blue-600 to-cyan-600',
                    isLink: true
                  },
                  {
                    icon: Phone,
                    title: t('contact.info.phone'),
                    value: personalInfo.phone,
                    href: `tel:${personalInfo.phone}`,
                    color: 'from-green-500 to-emerald-500',
                    isLink: true
                  },
                  {
                    icon: MapPin,
                    title: t('contact.info.location'),
                    value: personalInfo.location,
                    href: personalInfo.location ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}` : null,
                    color: 'from-purple-500 to-pink-500',
                    isLink: !!personalInfo.location
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="opacity-0 translate-y-5 animate-fade-in-up group"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <a
                      href={contact.href || undefined}
                      target={contact.isLink ? '_blank' : undefined}
                      rel={contact.isLink ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:translate-x-2 hover:shadow-2xl group cursor-pointer"
                      style={{ textDecoration: 'none' }}
                      tabIndex={contact.isLink ? 0 : -1}
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">
                          {contact.title}
                        </p>
                        {contact.isLink && contact.href ? (
                          <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                            {contact.value}
                          </span>
                        ) : (
                          <span className="text-gray-600 dark:text-gray-400">
                            {contact.value}
                          </span>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <div className="opacity-0 translate-y-5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, url: personalInfo.social.github, color: 'hover:bg-gray-800', name: 'GitHub' },
                    { icon: Linkedin, url: personalInfo.social.linkedin, color: 'hover:bg-blue-600', name: 'LinkedIn' },
                    { icon: MessageSquare, url: personalInfo.social.whatsapp, color: 'hover:bg-green-500', name: 'WhatsApp' },
                    { icon: Instagram, url: personalInfo.social.instagram, color: 'hover:bg-pink-500', name: 'Instagram' }
                  ].map(({ icon: Icon, url, color, name }, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-2 ${color}`}
                      title={name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 translate-x-12 animate-slide-in-right">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t('contact.form.send')}
                  </h3>
                </div>

                <div className="space-y-6">
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
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500 focus:scale-105"
                        placeholder={t('contact.form.name')}
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
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500 focus:scale-105"
                        placeholder={t('contact.form.email')}
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
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 placeholder-gray-500 focus:scale-105"
                      placeholder={t('contact.form.subject')}
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
                      className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none placeholder-gray-500 focus:scale-105"
                      placeholder={t('contact.form.message')}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold text-lg hover:scale-105 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;