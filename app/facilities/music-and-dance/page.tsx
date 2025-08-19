import React from "react";
import Image from "next/image";

const MusicDance = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/music-dance-hero.jpg"
          alt="Music & Dance - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Music & Dance
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Message */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Nurturing Creativity Through Music & Dance
          </h2>

          <p>
            At <strong>Vinayak International School</strong>, we believe that{" "}
            <b>arts are the soul of education</b>. Music and dance play an
            essential role in fostering creativity, rhythm, confidence, and
            cultural appreciation among students.
          </p>
        </div>
      </div>

      {/* Music Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">🎵 Music</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Our music classes provide students the opportunity to learn both
            vocal and instrumental music. With exposure to classical, folk, and
            contemporary music, students not only develop talent but also
            discipline, patience, and a love for art.
          </p>

          {/* Music Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/music1.jpg"
                alt="Students learning instruments"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/music2.jpg"
                alt="Choir performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/music3.jpg"
                alt="Student playing guitar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dance Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">💃 Dance</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Dance brings joy, energy, and cultural expression to our students.
            From classical and folk dances to western styles, our school
            provides a platform where every student can showcase their talent
            and gain confidence through stage performances and competitions.
          </p>

          {/* Dance Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/dance1.jpg"
                alt="Students performing classical dance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/dance2.jpg"
                alt="Group dance performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/dance3.jpg"
                alt="Students practicing dance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicDance;
