"use client";

import Image from "next/image";


const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with Next.js and Sanity.",
    image: "/project.PNG?height=300&width=400",
    tags: ["Next.js", "React", "Sanity", "Tailwind CSS","API Integration"],
  },
  {
    title: "Furniture Website",
    description: "A responsive task management application using React and MockAPI.",
    image: "/project2.PNG?height=300&width=400",
    tags: ["Nextjs", "tailwind", "CSS"],
  },
  {
    title: "Portfolio Website",
    description: "A dynamic portfolio website showcasing my projects and skills.",
    image: "/portfolio.PNG?height=300&width=400",
    tags: ["Next.js", "Tailwind CSS", ],
  },
  {
    title: "Food Tuck",
    description: "Good food is not just a meal; it s an experience that brings joy, comfort, and togetherness. 😊🍽️",
    image: "/food.PNG?height=300&width=400",
    tags: ["JavaScript", "API Integration", "CSS"],
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with user authentication and comments.",
    image: "/blog.PNG?height=300&width=400",
    tags: ["Node.js", "TailwindCss"],
  },
  {
    title: "Clothing Website",
    description: "Trendiest styles and premium quality fabrics – your one-stop clothing destination!",
    image: "/cloths.PNG?height=300&width=400",
    tags: ["React", "TailwindCss", "next.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
  
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/50 border-2 border-purple-500/20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent italic">
                  {project.title}
                </h3>
                <p className="text-sky-200 mb-4 italic">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-black text-xs font-semibold px-2.5 py-0.5 rounded-full italic"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Projects;