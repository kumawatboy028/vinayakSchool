"use client";

import Image from "next/image";

const DirectorMessage = () => {
  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
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
              From the Desk of Director
            </h1>
          </div>
        </div>
      </div>

      {/* Director Bio Section */}
      <div className="bg-gray-50 py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
            <strong>Mr. Rahul Sharma</strong>, the Director of{" "}
            <strong>Vinayak International School</strong>, Dist-Sikar,
            Rajasthan, is a visionary leader dedicated to nurturing excellence
            in education. With years of experience in the education sector, Mr.
            Rahul Sharma believes in creating a learning environment that
            balances academics, innovation, values, and discipline. His guidance
            ensures that the institution remains committed to shaping
            responsible and capable future leaders.
          </p>
        </div>
      </div>

      {/* Message Section with Image */}
      <div className="bg-white py-8 px-4 md:px-10 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-80 rounded-lg shadow-lg relative overflow-hidden bg-gray-200">
                <Image
                  src="https://pogrclmgp8cnsul5.public.blob.vercel-storage.com/authorities/director.png"
                  alt="Mr. Rahul Sharma - Director of Vinayak International School"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="250px"
                />
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="flex-1 space-y-4 text-base md:text-lg text-gray-800 text-justify leading-relaxed">
              <p className="font-semibold text-lg">Dear Parents & Students,</p>
              <p>
                Education is the most powerful tool that can transform lives and
                empower generations. At Vinayak International School, we strive
                to create an environment where students not only acquire
                knowledge but also develop life skills, values, and confidence
                to face the challenges of the future.
              </p>
              <p>
                Our mission is to nurture each {`child’s`} potential, encourage
                creativity, and foster a spirit of curiosity and resilience. We
                believe in holistic development—where academic excellence goes
                hand in hand with sports, arts, leadership, and moral values.
              </p>
            </div>
          </div>

          {/* Continue message below */}
          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-800 text-justify leading-relaxed">
            <p>
              Together with a dedicated team of educators and supportive
              parents, we aim to instill in our students the confidence and
              integrity to excel not only in their careers but also as
              responsible citizens of society. We welcome every child to a
              journey of growth, learning, and success.
            </p>

            {/* Signature */}
            <div className="pt-6 text-right">
              <p className="font-bold">
                Mr. Rahul Sharma
                <br />
                <span className="font-normal text-gray-600 text-sm">
                  Director
                </span>
                <br />
                <span className="font-normal text-gray-600 text-sm">
                  Vinayak International School
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
