"use client";

import Image from "next/image";

const GuidingStatements = () => {
  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1enAMblia0-3Fs9gElPUPIXEALhl-VFTm"
          alt="Guidance and Counselling"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Guidance &amp; Counselling
            </h1>
          </div>
        </div>
      </div>

      {/* Guidance Content */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <p>
            At{" "}
            <strong>VINAYAK INTERNATIONAL SCHOOL, Fatehpur, Shekhawati</strong>,
            we are dedicated to nurturing the overall development of every
            student. Our <strong>Guidance and Counselling</strong> program is
            tailored to help adolescents uncover and realize their full
            potential while building resilience for personal and academic
            success.
          </p>
          <p>
            Expert guidance counsellors regularly assist students in making
            informed and realistic educational and vocational choices that align
            with their aptitudes, interests, and aspirations. Through timely
            support and personalized counselling, we empower students to set and
            achieve meaningful goals for their academic journey and future
            careers.
          </p>
          <p>
            <strong>Up-to-date Information:</strong> Students receive the latest
            and most relevant details about a wide spectrum of academic
            programs, entrance examinations, and vocational opportunities
            available both in India and abroad. This invaluable information
            helps them shape their ambitions into achievable dreams.
          </p>
          <p>
            <strong>Holistic Well-being:</strong> Our experienced school
            psychologist is available to support students in overcoming
            personal, social, and emotional challenges. Through sensitive and
            specialized care, students learn to confidently navigate obstacles,
            strengthen character, and thrive in diverse environments.
          </p>
          <p>
            In addition, regular workshops and seminars by domain experts expand
            student horizons, improve decision-making skills, and foster
            life-long values. At Vinayak International School, our commitment to
            guidance and counselling ensures every child is equipped for the
            demands of the modern world—academically, emotionally, and
            ethically.
          </p>
        </div>
      </div>

      {/* Guidance Mission Section */}
      <div className="bg-gray-50 text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Counselling Goals
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-justify leading-relaxed">
            <li>
              Help students identify their strengths, interests, and aptitudes
              for personal growth.
            </li>
            <li>
              Provide up-to-date guidance for educational and career path
              planning.
            </li>
            <li>
              Support {`students'`} emotional and social well-being in a safe
              and confidential environment.
            </li>
            <li>
              Organize seminars and workshops for skill-building and awareness
              about opportunities.
            </li>
            <li>
              Foster responsible decision-making, confidence, and resilience
              among adolescents.
            </li>
            <li>
              Involve parents and staff as active partners in the guidance and
              development process.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GuidingStatements;
