import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const Main = () => {
  console.log('Main component rendered');
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <section id="home">
        <div className="">
          <Home />
        </div>
      </section>
      <section id="about">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <About />
        </div>
      </section>
      <section id="portfolio">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Portfolio />
        </div>
      </section>
      <section id="resume">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Resume />
        </div>
      </section>
      <section id="contact">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Contact />
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