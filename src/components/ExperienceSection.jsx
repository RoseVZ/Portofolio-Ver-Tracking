import React from "react";

const experiences = [
  {
    role: "Project Intern",
    title: "NYC Department of Mental Health and Hygiene",
    link: "https://github.com/yourusername/ai-resume-refiner",
    date: "Feb 2025 – Present",
    description:
      "Developing an LLM driven document information extraction system to automate the extraction of key information from medical report, enhancing the efficiency of the data recording.",
    tech: ["Tranformers", "Gradio", "LangChain", "LLMs"],
  },
  {
    role: "Teaching Assistant",
    title: "Columbia University in the City of New York",
    link: "https://github.com/yourusername/smart-job-connector",
    date: "Jan 2025 – May 2025",
    description:
      "Assisted in grading and supporting students in Advanced Spoken Language Processing (Taught by: Prof. Julia Hirschberg), a graduate-level course focused on speech processing techniques and algorithms.",
    tech: [],
  },
  {
    role: "Student Research Asssistant",
    title: "Columbia University in the City of New York",
    link: "https://github.com/yourusername/smart-job-connector",
    date: "August 2024 – Jan 2025",
    description:
      "Integrated a Quantum ESPRESSO-based calculator into a pipeline to compute material properties and utilized these properties to train models like Schnet for accurate prediction of material characteristics, including energies.",
    tech: ["LLMS", "Pytorch"," Transformers", "OpenCV", "NumPy"],
  },
  {
    role: "Data Analyst Intern",
    title: "DELL Technologies",
    link: "#",
    date: "February 2024-June 2024",
    description:
      "Developed web crawlers using Scrapy and Selenium to gather data from competitor websites for market comparison and insights.Converted VBA macros to Python, focusing on automating and segregating data processes.",
    tech: ["Selenium", "Scrapy", "Python", "Pandas", "VBA"],
  },
  {
    role: "Undergraduate Research Assistant",
    title: "Bangalore University",
    link: "#",
    date: "September 2023 - June 2024",
    description:
      "Implemented and trained deep learning models using ResNet50 V2, VGG19, MobileNet V3, and DenseNet201 architectures to detect abnormal cervical cells in the Sipakmed dataset.",
    tech: ["Python", "TensorFlow", "Keras", "LIME", "OpenCV"],
  },
  {
    role: "Summer Intern",
    title: "DELL Technologies",
    link: "#",
    date: "May 2023 - June 2023",
    description:"Developed an AI-driven Chatbot that improved user interaction with DELL’s data resources, streamlining access to critical information and enhancing overall data utilization.",
    tech: ["RASA", "DAX", "NLP", "Machine Learning"],
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
