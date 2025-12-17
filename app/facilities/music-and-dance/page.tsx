import React from "react";
import Image from "next/image";

const MusicDance = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1J2PsfTSFL60nGSO135laiDFkRJC-B8ub"
          alt="Music & Dance - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Intro */}
      <div className="bg-white text-gray-800 py-10 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Nurturing Creativity Through Music & Dance
          </h2>

          <p>
            At <strong>Vinayak International School</strong>, we believe that
            <b> arts are the soul of education</b>. Music and dance help
            students build creativity, rhythm, cultural understanding, and
            confidence.
          </p>
        </div>
      </div>

      {/* Music Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-purple-700 mb-10">Music</h2>

          <p className="text-lg mb-10 leading-relaxed">
            Our music program gives students the opportunity to learn both vocal
            and instrumental music. Exposure to classical, folk, and modern
            music helps them develop discipline, patience, and a deep passion
            for the art.
          </p>

          {/* Music Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vocal Training",
                desc: "Students learn pitch, rhythm, and voice modulation through regular practice.",
              },
              {
                title: "Instrumental Learning",
                desc: "From harmonium and tabla to guitar, students explore a range of instruments.",
              },
              {
                title: "Classical & Folk Music",
                desc: "Focus on Indian classical and regional folk to connect with cultural heritage.",
              },
              {
                title: "Musical Theory",
                desc: "Understanding music fundamentals like notes, scales, and composition.",
              },
              {
                title: "Group Performances",
                desc: "Regular choir and group singing activities build confidence and teamwork.",
              },
              {
                title: "Stage Exposure",
                desc: "Students showcase their musical talents in events and celebrations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pink-700 mb-10">Dance</h2>

          <p className="text-lg mb-10 leading-relaxed">
            Dance helps students express themselves with confidence and energy.
            With training in classical, folk, and western dance styles, students
            learn discipline, flexibility, rhythm, and stage presence.
          </p>

          {/* Dance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classical Dance",
                desc: "Training in traditional Indian classical forms like Bharatanatyam and Kathak.",
              },
              {
                title: "Folk Dance",
                desc: "Students learn vibrant folk styles that reflect India's cultural diversity.",
              },
              {
                title: "Western Dance",
                desc: "Exposure to freestyle, hip-hop, and contemporary dance.",
              },
              {
                title: "Rhythm & Coordination",
                desc: "Activities aimed at improving balance, timing, and coordination.",
              },
              {
                title: "Choreography Lessons",
                desc: "Students learn how to create and perform their own dance sequences.",
              },
              {
                title: "Stage & Competitions",
                desc: "Performance opportunities to build confidence and showcase talent.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicDance;
