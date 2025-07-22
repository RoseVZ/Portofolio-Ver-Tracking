// Content.jsx
import React from 'react';

const Content = () => {
  return (
    <main className="md:w-2/3 overflow-y-auto p-6 space-y-32 bg-gray-900 text-white">
      <section id="about" className="min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          I’m a passionate developer working on full-stack web apps, AI tools, and beautiful UI/UX experiences.
        </p>
      </section>

      <section id="projects" className="min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p>
          Explore some of my recent projects including AI Resume Refiner, Smart Job Connector, and more.
        </p>
      </section>

      <section id="contact" className="min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Let’s connect! Drop me a message on LinkedIn or email me at yourname@example.com.
        </p>
      </section>
    </main>
  );
};

export default Content;
