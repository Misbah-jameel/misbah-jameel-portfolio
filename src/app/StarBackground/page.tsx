"use client";
import { useEffect, useState } from "react";

type Star = {
  id: string;
  top: number;
  left: number;
  delay: number;
  duration: number;
};

const StarBackground = ({ children }: { children: React.ReactNode }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate unique stars with crypto.randomUUID()
    const newStars = Array.from({ length: 150 }).map(() => ({
      id: crypto.randomUUID(), // More reliable unique ID
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-star pointer-events-none"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBackground;