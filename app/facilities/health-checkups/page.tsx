import React from "react";
import Image from "next/image";

const HealthCheckups = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Banner */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="Regular Health Checkups - Vinayak International School"
          fill
          className="object-revert object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Regular Health Checkups
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white text-gray-800 py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6 text-base md:text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-center">
            Prioritizing Student Well-being
          </h2>
          <p className="text-justify">
            At <strong>Vinayak International School</strong>, we ensure that
            <b> every student’s health is regularly monitored</b> through
            organized medical checkups. Our commitment to well-being helps
            children grow in a safe, healthy, and supportive environment.
          </p>
        </div>
      </div>

      {/* Health Checkup - Cards Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Comprehensive Health Camps
          </h2>
          <p className="text-lg mb-10 leading-relaxed">
            Regular health checkups are conducted by qualified doctors and
            medical professionals. These include a variety of essential health
            assessments to ensure the well-being of every child.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "General Physical Examination",
                desc: "Routine checkups to examine height, weight, posture, and overall fitness.",
              },
              {
                title: "Dental Checkups",
                desc: "Regular oral health assessments to ensure clean and healthy teeth.",
              },
              {
                title: "Eye & Vision Tests",
                desc: "Professional eye screening to detect early signs of vision issues.",
              },
              {
                title: "Growth Monitoring",
                desc: "Tracking student growth patterns with proper medical evaluation.",
              },
              {
                title: "Health Reports for Parents",
                desc: "Parents receive updates and advice based on their child's medical condition.",
              },
              {
                title: "Follow-up Guidance",
                desc: "Suggestions provided for further medical care whenever required.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Care Section */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Preventive Healthcare Awareness
          </h2>
          <p className="text-lg mb-10 leading-relaxed">
            Our school regularly arranges awareness programs to help students
            understand the importance of a healthy lifestyle and preventive
            care.
          </p>

          {/* Awareness Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Health Awareness Sessions",
                desc: "Interactive sessions on hygiene, first-aid, and everyday health practices.",
              },
              {
                title: "Nutrition Workshops",
                desc: "Guidance on eating habits, balanced diet, and healthy food choices.",
              },
              {
                title: "Vaccination Drives",
                desc: "Coordination with health departments for timely vaccinations.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCheckups;
