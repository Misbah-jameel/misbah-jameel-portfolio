"use client";

const educationData = [
  {
    degree: "IT Information Technology",
    institution: "GIAIC ",
    year: "2024 - 2025",
    description:
    "I am currently pursuing an IT course, learning programming languages and exploring emerging technologies like AI, web development, and software engineering.",
  },
  {
    degree: "BSc Medical Sciences",
    institution: "Shah Abdul Latif University in Sukkur",
    year: "2024 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Medical Sciences while actively exploring AI, IT, and software development to create innovative digital solutions.",
  },
  {
    degree: "Intermediate (Pre-Medical)",
    institution: "Digree College in Sukkur",
    year: "2021 - 2023",
    description:
      "Completed intermediate studies with a focus on biology, chemistry, and physics. This strong foundation in sciences has been instrumental in understanding complex systems, whether in the human body or in technology.",
  },
  {
    degree: "Matriculation",
    institution: "Iqra Public School in Sukkur",
    year: "2019 - 2021",
    description:
      "Completed matriculation with distinction, excelling in sciences and mathematics, which laid the groundwork for future academic pursuits in both medical sciences and technology.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-8 bg-black/50 border-2 border-purple-500/20 rounded-lg p-6 shadow-lg shadow-purple-500/30"
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent mb-2">
                {edu.degree}
              </h3>
              <p className="text-sky-200 mb-1">{edu.institution}</p>
              <p className="text-purple-300 mb-2">{edu.year}</p>
              <p className="text-sky-200">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;