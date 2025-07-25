// Content.jsx
import React from 'react';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';

const Content = () => {
  return (
    <main className="md:w-2/3 w-full overflow-y-auto overflow-x-hidden p-6 space-y-5 bg-gray-900 text-white">

      <section id="about" >
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>
      
      <section id="projects" >
        <ProjectsSection />
      </section>

      {/* <section id="contact" className="min-h-screen">
        <ContactSection />
      </section> */}
    </main>
  );
};

export default Content;