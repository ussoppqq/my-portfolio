import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const Main = () => {
  console.log('Main component rendered');
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <section id="home" className="min-h-screen">
        <div className="">
          <Home />
        </div>
      </section>
      <section id="about" className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <About />
          {/* <p className="text-gray-600 dark:text-gray-400"></p> Tambahan konten */}
        </div>
      </section>
      <section id="portfolio" className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Portfolio />
          {/* <p className="text-gray-600 dark:text-gray-400"></p> Tambahan konten */}
        </div>
      </section>
      <section id="resume" className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Resume />
          {/* <p className="text-gray-600 dark:text-gray-400"></p> Tambahan konten */}
        </div>
      </section>
      <section id="contact" className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Contact />
          {/* <p className="text-gray-600 dark:text-gray-400"></p> Tambahan konten */}
        </div>
      </section>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Main;