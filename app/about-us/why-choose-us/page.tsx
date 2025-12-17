"use client";

import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1enAMblia0-3Fs9gElPUPIXEALhl-VFTm"
          alt="From the Desk of Director"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Why Choose Us
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <p>
            <strong>Vinayak International Public School</strong> emphasizes the
            importance of {`'Learning by Doing'`}. We believe learning should be
            interesting and practical. Almost every subject has Kits – Maths,
            Science, Environmental Science etc. We intend to draw out and
            nurture their natural abilities, be it artistic, scientific or
            linguistic. A strong emphasis on holistic growth is emphasized with
            subjects like Public Speaking, Creative Writing, Theatre, Music,
            Dance and numerous internal and external competitions we provide.
          </p>
          <p>
            We look after an appropriate Teacher-Student Ratio, constant
            progress tracking of every child and tend to interject in the
            students, strong characteristic values.
          </p>
          <p>
            We are the kind of an institution that believes in empowering our
            students and teachers while moving forward along with technology, be
            it through interactive smart classes or innovative labs.
          </p>
          <p>
            We also emphasize a great deal on Safety and Security. In a true
            International sense, parents can track the performance of their
            wards through various means such as Online Management Software, SMS
            alerts, Call Centre facility and periodic visits by teachers.
          </p>
        </div>
      </div>

      {/* Why Choose Us Features */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-600">
                  Learning by Doing
                </h3>
                <p className="text-gray-700">
                  Practical and interactive learning with subject-specific kits
                  for Maths, Science, Environmental Science, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-green-600">
                  Holistic Development
                </h3>
                <p className="text-gray-700">
                  Comprehensive programs including Public Speaking, Creative
                  Writing, Theatre, Music, Dance, and competitive opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-purple-600">
                  Technology Integration
                </h3>
                <p className="text-gray-700">
                  Interactive smart classes and innovative labs that empower
                  both students and teachers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-orange-600">
                  Optimal Teacher-Student Ratio
                </h3>
                <p className="text-gray-700">
                  Personalized attention with constant progress tracking and
                  value-based character development.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-red-600">
                  Safety & Security
                </h3>
                <p className="text-gray-700">
                  Comprehensive safety measures ensuring a secure learning
                  environment for all students.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-teal-600">
                  Parent Connect
                </h3>
                <p className="text-gray-700">
                  Multiple communication channels including Online Management
                  Software, SMS alerts, Call Centre, and teacher visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
