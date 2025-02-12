
"use client";

// import { useState, useEffect } from "react";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Space Background with Stars */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-12 text-center max-w-2xl text-sky-200">
          Explore the intersection of Medical Sciences and Technology
        </p>

        {/* Button */}
        <div>
          <Link href="/portfolio">
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-10 transition-opacity duration-300">
              Visit My Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;