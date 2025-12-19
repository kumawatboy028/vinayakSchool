"use client";

import Image from "next/image";
import { useState } from "react";

const newsData = [
  {
    id: 1,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news1.jpeg",
  },
  {
    id: 2,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news2.jpeg",
  },
  {
    id: 3,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news3.jpeg",
  },
  {
    id: 4,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news4.jpeg",
  },
  {
    id: 5,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news5.jpeg",
  },
  {
    id: 6,
    image:
      "https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/news/news6.jpeg",
  },
];

const NewsAndAnnouncement = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="Latest News and Announcements"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Latest News & Announcements
          </h1>
        </div>
      </div>

      {/* News Image Grid */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="group relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImg(news.image)}
            >
              <Image
                src={news.image}
                alt="News Update"
                fill
                className="object-revert transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <p className="text-white text-sm font-medium">
                    View Full Screen
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-white text-4xl hover:text-gray-400 transition-colors z-[60]"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          <div className="relative w-full max-w-5xl h-[85vh]">
            <Image
              src={selectedImg}
              alt="Full Screen View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAndAnnouncement;
