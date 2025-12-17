import React from "react";
import Image from "next/image";

const SportsAndYoga = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Banner */}
      <div className="relative w-full h-[320px]">
        <Image
          src="https://drive.google.com/uc?id=1fbYVjo9LIc8X-U0NwG_PG4aQrwVukmKp"
          alt="Facilities - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Intro Message */}
      <div className="bg-white text-gray-800 py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Creating a Healthy & Active Learning Environment
          </h2>

          <p>
            At <strong>Vinayak International School</strong>, we believe that a
            child’s development goes far beyond academics. Our focus is on
            nurturing young minds through{" "}
            <strong>
              physical fitness, emotional well-being, discipline, and holistic
              growth.
            </strong>
          </p>

          <p>
            With a balanced approach to sports and yoga, students learn to build
            confidence, enhance focus, and develop a positive mindset.
          </p>
        </div>
      </div>

      {/* Sports Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Sports & Games
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Sports play a crucial role in building{" "}
            <strong>
              discipline, teamwork, leadership, and physical strength.
            </strong>{" "}
            At Vinayak International School, students actively participate in a
            variety of sports such as:
          </p>

          <ul className="list-disc pl-8 mt-4 space-y-2 text-lg text-gray-700">
            <li>Cricket</li>
            <li>Football</li>
            <li>Basketball</li>
            <li>Athletics</li>
            <li>Badminton</li>
            <li>Kho-Kho & Kabaddi</li>
            <li>Volleyball</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mt-6">
            With well-maintained playgrounds and trained coaches, students are
            encouraged to participate in inter-house and inter-school
            competitions, helping them gain confidence and sportsmanship.
          </p>
        </div>
      </section>

      {/* Yoga Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Yoga & Mindfulness
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Yoga is an integral part of our curriculum, helping students achieve
            mental clarity, emotional balance, and physical well-being. Regular
            yoga sessions help students improve:
          </p>

          <ul className="list-disc pl-8 mt-4 space-y-2 text-lg text-gray-700">
            <li>Concentration and memory power</li>
            <li>Flexibility and posture</li>
            <li>Emotional stability</li>
            <li>Self-discipline and focus</li>
            <li>Mind-body coordination</li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mt-6">
            Under the guidance of experienced instructors, students practice{" "}
            <strong>asanas, breathing techniques, and meditation</strong> to
            achieve a balanced and positive mindset.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SportsAndYoga;
