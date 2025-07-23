// Sidebar.jsx
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  
];

const Sidebar = ({ activeSection }) => {
  const [text] = useTypewriter({
    words: ["Machine Learning", "Robotics", "AI", "Music", "Art"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <aside
  className="
    w-full
    md:w-2/5
    bg-gray-900 text-white p-10
    md:sticky md:top-0
    h-auto md:h-screen
    flex-shrink-0 flex flex-col justify-center items-center md:items-start
  "
>
  <div className="space-y-8 w-full pl-10">
    {/* Name */}
    <h1 className="text-3xl md:text-5xl font-bold tracking-wide drop-shadow-md text-center md:text-left">
      Priyanka Rose Varghese
    </h1>

    {/* Typewriter Title */}
    <h2 className="text-xl md:text-1xl font-bold font-monoFont text-white text-center md:text-left">
      <span>{text}</span>
      <Cursor cursorBlinking cursorStyle="|" cursorColor="#ff014f" />
    </h2>
    <div className="mt-10 text-center md:text-left md:pl-6">
    <a
  href="/ResumePriyanka.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-pink-400 hover:text-pink-600 font-semibold transition-colors duration-300 text-lg md:text-xl"
>
  {/* Larger document icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 md:w-8 md:h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 7v10a2 2 0 002 2h6a2 2 0 002-2V9l-6-6H9a2 2 0 00-2 2z"
    />
  </svg>

  Resume
</a>

</div>
    {/* Navigation */}
    <nav className="space-y-6 mt-8 text-center md:text-left md:pl-6 hidden md:block">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`
            group flex items-center gap-4
            text-lg transition-all duration-300 ease-in-out transform
            ${
              activeSection === id
                ? "text-gray-300 scale-110 font-bold"
                : "text-white hover:text-gray-300 scale-100"
            }
          `}
        >
          <span
            className={`h-px w-10 md:w-16 bg-gray-500 transition-all duration-300
              ${
                activeSection === id
                  ? "bg-pink-500 w-16 md:w-24"
                  : "group-hover:bg-pink-400"
              }
            `}
          ></span>
          {label}
        </a>
      ))}
        </nav>
        {/* Separate Resume Link */}

  </div>
</aside>


  );
};

export default Sidebar;