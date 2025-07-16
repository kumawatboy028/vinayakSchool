"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/classroom.jpg",
    caption: "Students in classroom",
  },
  {
    src: "/images/gallery/assembly.jpg",
    caption: "Morning Assembly",
  },
  {
    src: "/images/heroBanner/fest1.jpg",
    caption: "Cultural Fest",
  },
  {
    src: "/images/gallery/sports.jpg",
    caption: "Annual Sports Day",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-[#f4e5a5] px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
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

        {/* Slider */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl">
          {/* Image */}
          <div className="relative w-full h-72 md:h-[400px]">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].caption}
              fill
              className="object-cover"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4 text-white text-lg font-semibold text-left">
              {galleryImages[currentIndex].caption}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-gray-800 shadow-md rounded-full p-2"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-gray-800 shadow-md rounded-full p-2"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#17d0cfz]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
