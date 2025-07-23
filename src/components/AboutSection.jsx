import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen bg-gray-900 text-white px-6 py-20 flex items-center justify-center"
  >
    <div className="max-w-4xl w-full space-y-8 text-center lg:text-left">
    
      

      {/* Bio */}
      <p className="text-lg  md:text-1xl leading-relaxed text-gray-300 space-y-4">
  I’m a tech enthusiast with a big love for <span className="text-pink-400">music</span>, <span className="text-pink-400">art</span>, and <span className="text-pink-400">astrophysics</span>. 
  When I’m not buried in code or fine-tuning models, you’ll probably find me jamming out to some tunes, sketching, 
  or gazing up at the night sky and pondering the universe's secrets. These passions keep me grounded and spark the creativity that I bring into everything I do.
  <br /><br />
  At <span className="text-pink-400">Columbia University</span>, where I’m pursuing my Master’s in Computer Science, I’m working on some exciting projects—like improving cancer detection using advanced deep learning models. 
  But beyond the algorithms, I believe that science, tech, and art all share the same heartbeat: <span className="italic">curiosity</span>, <span className="italic">exploration</span>, and <span className="italic">pushing boundaries</span>.
  <br /><br />
  I’m always up for a good chat about anything from machine learning to music theory, or even the wonders of space. 
  <span className="text-pink-400 font-semibold"> Let’s connect</span> and talk about everything exciting in the universe.
</p>


      <p className="text-base md:text-lg text-gray-400">
        Birthday: <span className="text-white">Feb 25, 2002</span> <br />
        Languages: English, Malayalam, Kannada, Hindi
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
        {/* <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 transition text-white font-semibold shadow-lg"
        >
          Contact Me
        </a> */}
        <a
          href="mailto:priyarosev949@gmail.com"
          className="flex items-center gap-2 px-5 py-3 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white transition"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://linkedin.com/in/priyanka-rose-varghese/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/RoseVZ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
