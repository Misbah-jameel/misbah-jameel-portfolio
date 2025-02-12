"use client";

import Link from "next/link";

const CV = () => {
  return (
    <div className="min-h-screen bg-black text-sky-200 p-8">
      <div className="max-w-4xl mx-auto bg-black/50 border-2 border-purple-500/20 rounded-lg p-8 shadow-lg shadow-purple-500/30">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          Misbah Jameel
        </h1>
        <p className="text-xl mb-4 italic">BSc Medical Sciences Student | Tech Enthusiast | IT Student</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
            Summary
          </h2>
          <p className="italic">
            A dedicated BSc Medical Sciences student with a strong passion for technology and its applications in
            healthcare. Combining medical knowledge with self-taught programming skills to explore innovative solutions
            at the intersection of healthcare and technology.
          </p>
        </section>

        <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
    Personal Information
  </h2>
  <ul className="list-disc list-inside italic">
    <li><strong>Name:</strong> Misbah Jameel</li>
    <li><strong>DOB:</strong> 22-Dec-2006</li>
    <li><strong>Location:</strong> Karachi, Pakistan</li>
    <li><strong>Email:</strong> dayomuhammad892@gmail.com</li>
    <li><strong>Phone:</strong>+92 333 7143153</li>
    <li><strong>Languages:</strong> Urdu, English</li>
  </ul>
</section>
      
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">BSc Medical Science</h3>
            <p className="italic"> Shah Abdul latif University in Sukkur, 2024 - Present</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Intermediate (Pre-Medical)</h3>
            <p className="italic">Girls Digre College in Sukkur, 2022 - 2023</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Matriculation</h3>
            <p className="italic">Iqra Public School in Sukkur, 2019 - 2021</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
            Skills
          </h2>
          <ul className="list-disc list-inside italic">
            <li>Medical Sciences fundamentals</li>
            <li>HTML, CSS, JavaScript, Typescript</li>
            <li>React.js, Next.js</li>
            <li>Node.js</li>
            <li>UI UX </li>
            <li>Data analysis </li>
            <li>Git version control</li>
            <li>Tools Figma ,Sanity ,Mock api</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">E-Commerce Website</h3>
            <p className="italic">
              A web application providing easy-to-understand medical information for patients, built with React and
              Node.js.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Furniture Website</h3>
            <p className="italic">
              A mobile-responsive application for tracking personal health metrics, using React Native and Firebase.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="italic">
              A dynamic portfolio website showcasing the intersection of medical sciences and technology, built with
              Next.js and Framer Motion.
            </p>
          </div>
        </section>

        <Link href="/">
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-black px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity duration-300 italic">
            Back to Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CV;