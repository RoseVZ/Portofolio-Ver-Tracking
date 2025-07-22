// Sidebar.jsx
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
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
  w-full        /* full width on small screens */
  md:w-1/3      /* 1/3 width on md+ */
  bg-gray-900 text-white p-10
  md:sticky md:top-0 /* sticky only md and up */
  h-auto md:h-screen
  flex-shrink-0 flex flex-col justify-center items-center md:items-start
"
    >
      <div className="space-y-8 w-full">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold font-monoFont tracking-wide drop-shadow-md text-center md:text-left">
          Priyanka Rose Varghese
        </h1>

        {/* Typewriter Title */}
        <h2 className="text-xl md:text-2xl font-bold font-monoFont text-white text-center md:text-left">
          <span>{text}</span>
          <Cursor cursorBlinking cursorStyle="|" cursorColor="#ff014f" />
        </h2>

        {/* Navigation - centered on mobile, right-aligned on md+ */}
        <nav className="space-y-6 mt-8 text-center md:text-left md:pl-6 hidden md:block">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
        group flex items-center gap-4
        font-monoFont text-lg transition-all duration-300 ease-in-out transform
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
        }`}
              ></span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
