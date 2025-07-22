import React from 'react';

const projects = [
  {
    title: "AI Resume Refiner",
    link: "https://github.com/yourusername/ai-resume-refiner",
    date: "2025",
    description:
      "An AI-powered tool that refines resumes to better match job descriptions using RAG pipelines and LLMs.",
    tech: ["React", "Gradio", "LangChain", "LLMs", "ChromaDB"],
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    title: "Smart Job Connector",
    link: "https://github.com/yourusername/smart-job-connector",
    date: "2025",
    description:
      "Finds best-matching LinkedIn connections for a job and crafts personalized outreach messages using contextual AI prompts.",
    tech: ["Next.js", "GPT-4", "Puppeteer", "Pinecone"],
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Cancer Detection Research",
    link: "#",
    date: "2024",
    description:
      "Applied CNNs and transformers to improve early cancer detection accuracy from histopathology images.",
    tech: ["PyTorch", "Transformers", "OpenCV", "NumPy"],
    image: "https://via.placeholder.com/150",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 bg-gray-950 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-pink-400  text-left">
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
            {/* Image on left */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full md:w-48 rounded-lg object-cover flex-shrink-0"
            />

            {/* Content on right */}
            <div className="flex flex-col justify-between flex-grow text-gray-300 group-hover:text-white transition-colors duration-300">
              <div>
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-pink-400 underline underline-offset-2">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
