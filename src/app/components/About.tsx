"use client";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
          About Me
        </h2>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-lg text-sky-200 bg-black border-2 border-purple-500 rounded-lg p-6 shadow-lg shadow-purple-500/50">
          <p className="mb-4 italic">
           💻 Hey there! I m Misbah Jameel, a tech enthusiast with a strong passion for web development and software engineering. 🚀 I thrive on exploring new technologies and building innovative solutions that push the boundaries of digital experiences.  
          </p>
          <p className="mb-4 italic">
          🔹 Skilled in **React, Next.js, Node.js**, and other modern web technologies, I love creating sleek, efficient, and scalable applications. Whether it s front-end magic ✨ or back-end logic ⚡, I enjoy crafting seamless user experiences.  
          </p>
          <p className="mb-4 italic">
          🌍 The ever-evolving tech world excites me, and I m constantly learning, experimenting, and staying updated with the latest trends. My goal is to leverage my skills to build impactful digital solutions that make a difference.  .
          </p>
          <p className="italic">
          💡 When I m not coding, you ll find me exploring AI, participating in hackathons, or brainstorming creative ideas for my next project. Let s innovate and build the future together! 🚀  
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;