"use client";

import Image from "next/image";

const AdmissionDesk = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1Dzprq_uOVnzarwRV0a6soHgX3MScIV1q"
          alt="Admission Desk - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        {/* Overlay Text */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Admission Desk
            </h1>
          </div>
        </div> */}
      </div>

      {/* Welcome Message */}
      <div className="bg-white text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto space-y-6 text-justify text-base md:text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Welcome to Our Admission Process
          </h2>

          <p>
            Choosing the right school for our children is not an easy task. This
            is why we believe that the first step of the admission process
            should be to visit our school and get a feel of the Vinayak
            International School setting and friendly environment.
          </p>

          <p>
            Today,{" "}
            <strong>Vinayak International School, Fatehpur, Sikar</strong> is an
            institution where global education is seamlessly integrated with
            positive social values, coupled with a creative freedom that equips
            every student with necessary life skills.
          </p>

          <p>
            My suggestion to all of you is to surf our {`school's`} website
            thoroughly. The website spells out most of the information that
            parents and students need to know before applying. After checking
            the admission procedure, feel free to send us an e-mail for further
            details. I will be happy to give you all the information you require
            and to get you to know <strong>Vinayak International School</strong>{" "}
            better.
          </p>

          <p className="font-semibold text-center text-lg">
            We look forward to meeting you!
          </p>

          <div className="text-right pt-4">
            <p className="font-bold">
              Warm regards,
              <br />
              <span className="font-normal text-gray-600 text-sm">
                The Admission Office
                <br />
                Vinayak International School, Fatehpur, Sikar
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Admission Steps */}
      <div className=" text-gray-800 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Your Admission Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Visit Our Campus
              </h3>
              <p className="text-gray-700">
                Experience the Vinayak International School campus in Fatehpur,
                Sikar and our friendly environment firsthand. Schedule a campus
                tour to see our modern facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600">
                Explore Our Website
              </h3>
              <p className="text-gray-700">
                Browse through our comprehensive website to understand our
                CBSE-affiliated curriculum, admission procedures, and
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">
                Contact Our Team
              </h3>
              <p className="text-gray-700">
                Send us an email or call for detailed information and
                personalized guidance through the Vinayak International School
                admission process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDesk;
