"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaCode, FaPaintBrush, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: FaCode },
  { name: "TailwindCSS", icon: FaPaintBrush },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Sanity", icon: FaDatabase },
  { name: "Figma", icon: FaFigma },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-black/50 border-2 border-purple-500/20 rounded-lg p-6 text-center 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              {/* Icon and Name */}
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative">
                  <skill.icon className="text-5xl mb-4 mx-auto text-white text-transparent w-12 h-12" />
                  {/* Hover Tooltip */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-500/90 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;