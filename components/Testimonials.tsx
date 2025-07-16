"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
  bgColor: string;
  textColor: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sunita Mehta",
    role: "Parent, Class VII",
    initials: "SM",
    rating: 5,
    quote:
      "The teachers at Vinayak are incredibly supportive. My daughter has grown so much in confidence and knowledge.",
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    id: 2,
    name: "Arjun Raj",
    role: "Student, Class IX",
    initials: "AR",
    rating: 5,
    quote:
      "I love coming to school every day! The teachers make learning fun and I have made so many friends.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Alumni, Class of 2020",
    initials: "PS",
    rating: 5,
    quote:
      "Vinayak gave me the foundation I needed for success. Now I'm pursuing engineering with their guidance.",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "Alumni, Class of 2019",
    initials: "RK",
    rating: 5,
    quote:
      "The holistic education approach at Vinayak helped me develop both academically and personally.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    id: 5,
    name: "Meera Sharma",
    role: "Parent, Class V",
    initials: "MS",
    rating: 5,
    quote:
      "Outstanding teaching methodology and excellent care for each child's individual growth and development.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    id: 6,
    name: "Akash Patel",
    role: "Alumni, Class of 2021",
    initials: "AP",
    rating: 5,
    quote:
      "The values and knowledge I gained at Vinayak continue to guide me in my college journey.",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  const stars = Array.from({ length: testimonial.rating }, (_, i) => (
    <span key={i} className="text-yellow-400 text-xl">
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between min-h-[320px]">
      <div className="flex gap-1 mb-4">{stars}</div>

      <p className="text-gray-700 text-lg italic leading-relaxed mb-6 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-bold text-lg ${
            testimonial.image
              ? "bg-gray-200"
              : `${testimonial.bgColor} ${testimonial.textColor}`
          }`}
        >
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          ) : (
            testimonial.initials
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    setCurrentIndex(0); // Reset on resize
  }, [itemsPerPage]);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className="w-full py-20 bg-[#f4e5a5] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-700 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c88] mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our students, parents, and alumni about their experience
            at Vinayak Education Group.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid gap-8 mb-8 ${
              getCurrentTestimonials().length === 1
                ? "grid-cols-1 justify-items-center"
                : getCurrentTestimonials().length === 2
                ? "grid-cols-1 md:grid-cols-2 justify-items-center"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className={
                  getCurrentTestimonials().length === 1 ? "max-w-md" : ""
                }
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight
              className="w-6 h-6 text-gray-600"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#1f3c88]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
