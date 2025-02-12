/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from 'next/link';
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitMessage("Thank you for your message. I'll get back to you soon!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <form className="flex-1" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/50 border-2 border-purple-500/20 text-sky-200 rounded-lg focus:outline-none italic"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/50 border-2 border-purple-500/20 text-sky-200 rounded-lg focus:outline-none italic"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Message here..."
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border-2 border-purple-500/20 text-sky-200 rounded-lg focus:outline-none italic"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-black font-bold py-3 px-6 rounded-lg hover:opacity-80 transition-opacity duration-300 italic"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {submitMessage && (
              <p className="mt-4 text-center text-sky-200 italic">{submitMessage}</p>
            )}
          </form>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent italic">
              Connect With Me
            </h3>
            <p className="text-sky-200 mb-4 italic">
              Feel free to reach out through any of these platforms:
            </p>
            <div className="flex space-x-4 mb-8">
            <Link
  href="https://github.com/Misbah-jameel"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-sky-200 hover:opacity-80 transition-opacity"
>
  <FaGithub />
</Link>

<Link
  href="https://www.linkedin.com/in/misbah-jameel-509aa32b8"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-sky-200 hover:opacity-80 transition-opacity"
>
  <FaLinkedin />
</Link>

<Link
  href="https://www.instagram.com/misbahjameel66?igsh=eTc0cTU3aTg4Yjh0"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-sky-200 hover:opacity-80 transition-opacity"
>
  <FaInstagram />
</Link>

<Link
  href="https://www.tiktok.com/@misbahjameel66?_t=ZS-8tqoTk2eHE0&_r=1"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-sky-200 hover:opacity-80 transition-opacity"
>
  <FaTiktok />
</Link>
            </div>
            <p className="text-sky-200 mb-4 italic">Or send me an email at:</p>
            <Link
              href="mailto:dayomuhammad892@gmail.com"
              className="text-lg text-sky-200 hover:opacity-80 transition-opacity italic"
            >
              dayomuhammad892@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;