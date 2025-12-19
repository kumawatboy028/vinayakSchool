"use client";

import { Calendar } from "lucide-react";

const updates = [
  {
    date: "November 25, 2025",
    title: "Annual Sports Day 2025",
    description:
      "Grand celebration of Annual Sports Week concludes, highlighting the integration of physical excellence and holistic education.",
    tag: "Event",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    date: "November 14, 2025",
    title: "Children's Day Celebration",
    description:
      "Young Entrepreneurs in Action: The Annual Children’s Fair Sub-headline: Learning the art of business through ownership, creativity, and commerce.",
    tag: "Event",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    date: "December 14, 2025",
    title: "Parents And Teachers Meeting",
    description:
      "Interactive Parent-Teacher Meeting held to review academic milestones and personalize learning paths for every student.",
    tag: "Event",
    tagColor: "bg-purple-100 text-purple-800",
  },
];

const LatestUpdates = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full text-sm mb-3">
          News & Events
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3c88] mb-4">
          Latest Updates
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with our latest news, events, and achievements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl text-left hover:shadow-lg transition"
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1f3c88] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>

              {/* Tag */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.tagColor}`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
