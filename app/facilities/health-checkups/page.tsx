import React from "react";
import Image from "next/image";

const HealthCheckups = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/health-hero.jpg"
          alt="Regular Health Checkups - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Regular Health Checkups
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Prioritizing Student Well-being
          </h2>
          <p>
            At <strong>Vinayak International School</strong>, we ensure that{" "}
            <b>every {`student’s`} health is regularly monitored</b> through
            planned medical checkups. Our commitment to well-being ensures that
            children grow in a safe, healthy, and nurturing environment.
          </p>
        </div>
      </div>

      {/* Health Checkup Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            🩺 Comprehensive Health Camps
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Regular health checkups are organized by qualified doctors and
            healthcare professionals. These include{" "}
            <b>
              general physical examinations, dental checkups, eye tests, and
              growth monitoring
            </b>
            . Parents are informed about their {`child’s`} health status, and
            necessary advice is provided for further care if required.
          </p>

          {/* Health Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/health1.jpg"
                alt="Doctor examining students"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/health2.jpg"
                alt="Students dental checkup"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/health3.jpg"
                alt="Eye checkup camp"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Care Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            🌿 Preventive Healthcare Awareness
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            In addition to regular checkups, our school conducts{" "}
            <b>
              health awareness programs, vaccination drives, and nutrition
              workshops
            </b>{" "}
            to help students understand the importance of preventive care and
            healthy living.
          </p>

          {/* Awareness Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/awareness1.jpg"
                alt="Health awareness session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/awareness2.jpg"
                alt="Nutrition awareness program"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/awareness3.jpg"
                alt="Vaccination drive"
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

export default HealthCheckups;
