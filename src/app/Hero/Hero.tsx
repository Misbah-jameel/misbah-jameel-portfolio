
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
// import StarBackgroundLayout from "../StarBackground/page";

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "GIAIC STUDENT", "FULL STACK DEVELOPER"], 
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div>
    
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/50"></div>
            <Image
              src="/pic.jpg?height=400&width=400"
              alt="Misbah Jameel"
              width={400}
              height={400}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        
        <div className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic">
            Misbah Jameel
          </h1>

       
          <p className="text-lg md:text-xl lg:text-5xl mb-8 italic">
            <span ref={el} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent italic"></span>
          </p>

     
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#projects">
              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white px-6 py-3 font-semibold text-lg hover:opacity-80 transition-opacity duration-300 italic">
                View My Work
              </button>
            </Link>
            <Link href="/cv">
              <button className="bg-black text-sky-200 border-2 border-purple-500 px-6 py-3 font-semibold text-lg hover:bg-purple-500 hover:text-black transition-colors duration-300 italic">
                View CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;