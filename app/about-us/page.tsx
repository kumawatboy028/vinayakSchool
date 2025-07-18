"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/about-hero.jpg"
          alt="Students in Assembly"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              We are more than just a school.
            </h1>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-white text-gray-800 py-16 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <p>
            A child&apos;s mind is God&apos;s most wonderful creation and to
            develop it harmoniously is a highly onerous but equally rewarding
            task. At{" "}
            <strong>VINAYAK INTERNATIONAL SCHOOL, Fatehpur, Shekhawati</strong>,
            a well-established prestigious educational institution founded on
            April 7, 2010, we are whole-heartedly dedicated to assist children
            in their self-enlightenment besides ensuring a synchronous growth of
            their mind, body and soul. Our cherished aim is to make the learning
            process pupil-oriented, pragmatic and self-motivated.
          </p>
          <p>
            <strong>
              VINAYAK INTERNATIONAL SCHOOL, Fatehpur, Shekhawati, Sikar (Raj.)
            </strong>{" "}
            is located at Fatehpur in Sikar (Raj.) on N.H.52, amid eco-friendly
            natural surroundings, spread over an area of 20 acres. The School is
            hardly two hours drive from Jaipur and two & a half hours from
            Bikaner. It occupies and engrosses plenty of open space and
            playgrounds with well-ventilated and well-furnished modern
            buildings.
          </p>
          <p>
            <strong>VINAYAK INTERNATIONAL SCHOOL</strong> is an oasis where
            students from all over India aim at developing their hidden
            potential to the maximum in an atmosphere conducive to their
            holistic growth. Our sincere effort is to make the students
            exceptionally disciplined, dynamic and ideal citizens. Hence, the
            scholastic and co-scholastic activities are designed in such a
            manner that the students eagerly participate in them to transcend
            all pettiness and inculcate in themselves sound moral values and a
            high degree of social responsibility besides maintaining high
            standards of mental as well as physical fitness.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 text-gray-800 py-16 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Mission</h2>
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-justify leading-relaxed">
            <li>
              Create a stimulating and challenging learning environment where
              students will discover and develop their full potential.
            </li>
            <li>
              Attain highest academic standards by constant review of CBSE
              Academic curriculum, engaging the best facilitators and
              benchmarking standards against the best.
            </li>
            <li>
              Provide students with an opportunity to participate in activities
              that promote physical fitness.
            </li>
            <li>
              Inculcate respect for all religions and cultures with a strong
              emphasis on dignity of the individual.
            </li>
            <li>
              Provide a strong platform towards developing ecological and
              environmental awareness.
            </li>
            <li>
              Involve all stakeholders in the improvement / development process
              of the school.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
