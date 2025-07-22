// PortfolioLayout.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import Content from './Content';

const sections = ['about', 'experience','projects'];

const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% in view to count
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
  <Sidebar activeSection={activeSection} />
  <Content />
</div>
  );
};

export default PortfolioLayout;
