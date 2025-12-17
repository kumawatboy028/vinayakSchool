"use client"; // Required for state and clicks

import Image from "next/image";
import { useState } from "react";

const galleryData = [
  {
    id: 1,
    title: "New Year Celebrations",
    description:
      "Celebrating the innocence, curiosity, and bright potential of every child at our school.",
    imageUrl:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/school.jpg",
  },
  {
    id: 2,
    title: "Sports Week Highlights",
    description: "Snapshots from our grand Sports week celebration.",
    imageUrl:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/banners/sports_day.jpg",
  },
  {
    id: 3,
    title: "Hands-on Robotics Workshop",
    description:
      "Transforming students from technology consumers into technology creators.",
    imageUrl:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/facilities/digital_learning.jpg",
  },
  {
    id: 4,
    title: "Teachers' Day Celebration",
    description:
      "A Tribute to Our Mentors: Honoring the Architects of Our Future",
    imageUrl:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/events/teachersday.jpg",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="School Gallery"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            School Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImg(item.imageUrl)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-amber-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button className="absolute top-5 right-10 text-white text-4xl font-bold">
            &times;
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImg}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
