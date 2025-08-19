import React from "react";
import Image from "next/image";

const SportsAndYoga = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/facilities-hero.jpg"
          alt="Facilities - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Sports And Yoga
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Message */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Creating a Healthy & Active Learning Environment
          </h2>

          <p>
            At <strong>Vinayak International School</strong>, we believe that a
            {`child’s`} growth goes beyond academics. Our school is equipped
            with facilities that promote{" "}
            <b>fitness, creativity, discipline, and holistic development</b>.
          </p>
        </div>
      </div>

      {/* Sports Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            ⚽ Sports & Games
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            At Vinayak International School, sports play a vital role in shaping
            discipline, teamwork, and leadership. Students actively participate
            in cricket, football, basketball, athletics, badminton, and more.
            Our well-maintained playgrounds and professional coaching encourage
            students to excel both physically and mentally.
          </p>

          {/* Sports Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/sports1.jpg"
                alt="Students playing football"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/sports2.jpg"
                alt="Students playing cricket"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/sports3.jpg"
                alt="Students in athletics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            🧘 Yoga & Mindfulness
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Yoga is an integral part of our curriculum, helping students stay
            calm, focused, and healthy. Regular yoga sessions instill
            concentration, inner strength, and balance in young minds. Under
            expert guidance, students practice various asanas and meditation
            techniques that promote holistic growth.
          </p>

          {/* Yoga Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/yoga1.jpg"
                alt="Students doing yoga"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/yoga2.jpg"
                alt="Students meditating"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/yoga3.jpg"
                alt="Students performing yoga asanas"
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

export default SportsAndYoga;
