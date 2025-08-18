import React from 'react';
import deepFakeImage from '../assets/images/projects/DeepFake.png'; 
import RCA from '../assets/images/projects/RCA.png';
import Robojackson from '../assets/images/projects/Robojackson.png';
import Neuralyst from '../assets/images/projects/Neuralyst.png';
import Resume from '../assets/images/projects/resume.png';

const projects = [
   {
    title: "Agentic Resume Modifier",
    link: "https://github.com/RoseVZ/Resume_modifier_agent",
    date: "2025",
    description:
      "Built an automated resume optimization pipeline using LangGraph agents to parse job descriptions, select relevant experiences, evaluate via ATS scoring, and update LaTeX resumes.",
    tech: ["Langgraph", "Gradio","Agentic AI","GPT-4"],
    image: Resume,
  },
  {
    title: "DeepFake Detector",
    link: "https://github.com/RoseVZ/DeepFake-Detector",
    date: "2025",
    description:
      "This project leverages deep learning models like Vision Transformers (ViTs), CNN, and ConvNext to detect DeepFakes in images.",
    tech: [],
    image: deepFakeImage,
  },
  {
    title: "Real Time Root Cause Analysis in GCP using AI Workflows",
    link: "",
    date: "2025",
    description:
      "Built an automated, cloud-native RCA system using GCP (Pub/Sub, Logging, BigQuery) and Kubernetes to enable real-time error classification and remediation across six fault types",
    tech: ["GCP", "GPT-4", "BigQuery", "Docker", "Kubernetes"],
    image: RCA,
  },
  {
    title: "RoboJackson",
    link: "https://github.com/RoseVZ/RoboJackson",
    date: "2025",
    description:
      "RoboJackson is an end-to-end framework that teaches humanoid robots expressive dance movements by learning from short real-world videos.",
    tech: ["PyTorch", "OpenAI Gym", "Reinforcement Learning", "Robotics"],
    image: Robojackson,
  },
  {
    title: "Neuralyst",
    link:"https://github.com/RoseVZ/Neuralyst_auxiliary_features",
    date: "2025",
    description:
      "Neuralyst is an AI-powered to-do list app designed to tackle decision fatigue and procrastination. Leveraging Python, Whisper for voice-to-text, and LLAMA for intelligent task prioritization, it breaks down large tasks into manageable chunks and adapts to user context.",
    tech: [],
    image: Neuralyst,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-10 bg-gray-950 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-pink-400 text-left">
        Projects
      </h2>
      <div className="space-y-6 max-w-4xl">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-md p-6 gap-6 hover:bg-white hover:bg-opacity-10 hover:shadow-pink-500/30 hover:scale-[1.01] transition-all duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full md:w-48 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-between flex-grow text-gray-300 group-hover:text-white transition-colors duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-pink-400 underline underline-offset-2">
                  {proj.title}
                </h3>
                <p className="mb-3">{proj.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-pink-600 text-white text-sm font-monoFont"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-400 group-hover:text-pink-400">
                {proj.date}
              </span>
            </div>
          </a>
        ))}
        {/* GitHub CTA Link */}
        <div className="pt-8 text-left">
          <a
            href="https://github.com/RoseVZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-white hover:underline transition"
          >
            See more projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
