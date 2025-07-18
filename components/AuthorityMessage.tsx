"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const messages = [
  {
    role: `Principal's Message`,
    message: `At Vinayak Education Group, we believe that true education inspires curiosity, builds character, and prepares students for life beyond academics. Our focus is to provide a nurturing environment where every child feels valued, challenged, and empowered to reach their full potential.`,
    name: "Dr. Anant Sharma",
    position: "Principal",
    qualifications: "Ph.D., NET-MBA, M.Sc., M.Com., M.A., B.Ed. & CTET",
    image: "/images/authorities/principal.jpeg",
  },
  {
    role: `Chairman's Message`,
    message: `Education is about learning for oneself and gaining the wisdom to live meaningfully. We strive to nurture each ${`child's`} unique potential through experiential learning, strong values, and holistic development.`,
    name: "Mr. Mahesh Kumar Sharma",
    position: "Chairman",
    qualifications: "",
    image: "/images/authorities/chairman.jpg",
  },
  {
    role: `Managing Director's Message`,
    message: `At Vinayak International School, we are committed to fostering a culture of excellence and innovation. Our mission is to create a learning environment that encourages creativity, critical thinking, and lifelong learning.`,
    name: "Er. Rahul Sharma",
    position: `Managing Direector`,
    qualifications: "B.Tech. (CSE)",
    image: "/images/authorities/md.jpg",
  },
];

const AuthorityMessage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const data = messages[current];

  return (
    <section className="w-full bg-[#f4e5a5] py-12 relative">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row relative">
        {/* LEFT - Image */}
        <div className="w-full lg:w-1/2 h-72 lg:h-[400px] relative bg-gray-100">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT - Text */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 space-y-4 flex flex-col justify-center h-[400px]">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 w-[40%] py-1 rounded-full">
            {data.role}
          </span>
          <p className="text-gray-700 italic text-lg leading-relaxed h-[160px] overflow-y-auto pr-2">
            &ldquo;{data.message}&rdquo;
          </p>
          <div className="pt-4">
            <h3 className="text-[#1f3c88] font-bold text-lg">{data.name}</h3>
            <p className="text-blue-600 font-medium">{data.position}</p>
            <p className="text-gray-500 text-sm">{data.qualifications}</p>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {messages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-[#17d0cf]" : "bg-gray-400 hover:bg-[red]"
            }`}
            aria-label={`Show message ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AuthorityMessage;
