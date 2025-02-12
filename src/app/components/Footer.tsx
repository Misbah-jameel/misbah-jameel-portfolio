"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright Text */}
        <p className="text-sm bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent mb-4 italic">
          &copy; {new Date().getFullYear()} Misbah Jameel. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
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

        {/* Additional Links */}
        <div className="mt-4">
          <p className="text-xs text-sky-200/80 italic">
            Crafted with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;