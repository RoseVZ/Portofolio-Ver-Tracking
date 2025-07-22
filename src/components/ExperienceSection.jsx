import React from "react";

const experiences = [
  {
    role: "AI Research Intern",
    title: "NYC Department of Mental Health and Hygiene",
    link: "https://github.com/yourusername/ai-resume-refiner",
    date: "Feb 2025 – Present",
    description:
      "An AI-powered tool that refines resumes to better match job descriptions using RAG pipelines and LLMs.",
    tech: ["React", "Gradio", "LangChain", "LLMs", "ChromaDB"],
  },
  {
    role: "Teaching Assistant",
    title: "University of XYZ",
    link: "https://github.com/yourusername/smart-job-connector",
    date: "2025",
    description:
      "Helped students master course material while assisting in grading and office hours. Built tools to automate outreach matching.",
    tech: ["Next.js", "GPT-4", "Puppeteer", "Pinecone"],
  },
  {
    role: "Undergraduate Researcher",
    title: "Cancer Detection Research",
    link: "#",
    date: "2024",
    description:
      "Applied CNNs and transformers to improve early cancer detection accuracy from histopathology images.",
    tech: ["PyTorch", "Transformers", "OpenCV", "NumPy"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full py-10 bg-gray-950 text-white px-4 sm:px-6 md:pl-10 md:pr-0"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-pink-400 ">
        Experience
      </h2>

      <div className="space-y-6  md:-ml-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl transition-all transition-colors duration-300 hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:scale-[1.01] group"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              {/* Timeline column */}
              <div className="md:col-span-1">
                <div className="text-pink-400 text-sm ">
                  {exp.date}
                </div>
                <div className="w-1 h-full bg-pink-500 ml-1 mt-2 hidden md:block"></div>
              </div>

              {/* Content column */}
              <div className="md:col-span-3 space-y-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                <div>
                  <div className="text-sm uppercase tracking-widest font-semibold mb-1">
                    {exp.role}
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-1xl font-bold hover:text-pink-400 underline underline-offset-2 transition-colors duration-300"
                  >
                    {exp.title}
                  </a>
                </div>
                <p>{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-pink-600 text-white text-sm "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
