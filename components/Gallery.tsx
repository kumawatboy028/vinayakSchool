"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/classroom.jpg",
    caption: "Students in classroom",
  },
  {
    src: "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/morning_assembly.jpg",
    caption: "Morning Assembly",
  },
  {
    src: "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/fest1.jpg",
    caption: "Cultural Fest",
  },
  {
    src: "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/sports_day.jpg",
    caption: "Annual Sports Day",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use useCallback to keep the function stable
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Reduced to 5s for a better feel

    return () => clearInterval(interval);
  }, [nextSlide, currentIndex]); // Adding currentIndex here resets the timer when you click a dot

  return (
    <section className="w-full py-20 bg-[#f4e5a5] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-purple-100 text-purple-700 font-medium px-4 py-1 rounded-full text-sm mb-3">
          Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3c88] mb-4">
          Life at Vinayak
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Glimpses of our vibrant school community, events, and student
          achievements.
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl group">
          <div className="relative w-full h-72 md:h-[450px] transition-all duration-500 ease-in-out">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].caption}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-8 text-white text-left">
              <p className="text-lg font-semibold transform translate-y-0 transition-transform duration-300">
                {galleryImages[currentIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Added hover opacity for better UI */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-md rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 shadow-md rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator Dots - Added cursor-pointer and specific sizing */}
        <div className="flex justify-center mt-8 gap-3">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-[#1f3c88]"
                  : "w-3 bg-gray-400 hover:bg-purple-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
