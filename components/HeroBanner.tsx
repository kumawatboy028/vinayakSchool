"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "https://drive.google.com/uc?id=1WLCj2yoPF2ta4T--9NaqxdcU1jPzUV86",
  "/images/schoolOverview.jpg",
  "https://drive.google.com/uc?id=1piJzuAvBJxpJ2QZoqAx5g-2QBKybOVOL",
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#f4e5a5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center min-h-[600px] px-6 py-12 gap-12">
        {/* LEFT */}
        <div className="w-full lg:w-[50%] space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            Nurturing Tomorrow&apos;s{" "}
            <span className="text-[red]">Leaders</span>
          </h1>
          <p className="text-lg text-[#425075] max-w-lg">
            we are whole-heartedly dedicated to assist children in their
            self-enlightenment besides ensuring a synchronous growth of their
            mind, body and soul.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact-section"
              className="bg-[red] hover:bg-[#ff7a00] text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Admissions Open
            </Link>
            <Link
              href="/#contact-section"
              className="border-2 border-[#1f3c88] text-[#1f3c88] hover:bg-[#1f3c88] hover:text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-6 mt-6 text-[#425075] text-sm">
            <div className="flex items-center gap-2">
              <span>👨‍🎓</span>
              2000+ Students
            </div>
            <div className="flex items-center gap-2">
              <span>🏆</span>
              15+ Years Excellence
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[80%] relative h-72 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
          {/* Image Slider */}
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`School photo ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
