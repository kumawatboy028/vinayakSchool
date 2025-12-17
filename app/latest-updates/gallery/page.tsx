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
      "https://drive.google.com/uc?id=1KD1jxNc9bwC4rJqy_cGFj5rjufcfwHzB",
  },
  {
    id: 2,
    title: "Sports Week Highlights",
    description: "Snapshots from our grand Sports week celebration.",
    imageUrl:
      "https://drive.google.com/uc?id=1KD1jxNc9bwC4rJqy_cGFj5rjufcfwHzB",
  },
  {
    id: 3,
    title: "New Year Celebrations",
    description: "Students performing at the New Year program.",
    imageUrl:
      "https://drive.google.com/uc?id=1WLCj2yoPF2ta4T--9NaqxdcU1jPzUV86",
  },
  {
    id: 4,
    title: "Hands-on Robotics Workshop",
    description:
      "Transforming students from technology consumers into technology creators.",
    imageUrl:
      "https://drive.google.com/uc?id=1vlUmq95OoC8WTzGW7fosC2bF1N0KoD84",
  },
  {
    id: 5,
    title: "Teachers' Day Celebration",
    description:
      "A Tribute to Our Mentors: Honoring the Architects of Our Future",
    imageUrl:
      "https://drive.google.com/uc?id=1epBS3U5_pSmJyVDDUye0YhMrk3VYUjOm",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1WVxP4SMZj_1LuTwFB381T_PXed8iq8Pk"
          alt="School Gallery"
          fill
          className="object-cover object-center"
          priority
        />
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
