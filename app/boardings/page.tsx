import Image from "next/image";

const BoardingFacilities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="Boarding Facilities"
          fill
          className="object-revert object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Boarding Facilities
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-amber-800 mb-6">
          A Home Away From Home
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Our boarding facilities at{" "}
          <strong>Vinayak International School</strong> provide a safe,
          comfortable, and nurturing environment for students staying on campus.
          With experienced wardens, nutritious meals, and well-structured daily
          routines, we ensure that every child feels at home while staying
          focused on their academics and personal development.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-amber-700 mb-4">
              🏡 Boarding Facilities Include:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Separate hostels for boys and girls</li>
              <li>Spacious and well-ventilated dormitories</li>
              <li>24×7 security and supervision</li>
              <li>Nutritious and hygienic meals</li>
              <li>Daily study hours with teacher guidance</li>
              <li>Medical support and regular health checkups</li>
              <li>Indoor & outdoor recreational activities</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-amber-700 mb-4">
              🌟 Life in the Hostel
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Students living in the hostel enjoy a balanced routine of study,
              rest, sports, and cultural activities. Regular interaction with
              wardens, peers, and teachers helps them build confidence,
              discipline, and social values.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also organize weekend activities, cultural programs, group
              games, and personality development sessions to ensure holistic
              growth of every child.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Boarding Image Gallery */}
      {/* <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">
            📸 A Glimpse of Boarding Life
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/boarding1.jpg"
                alt="Students in dormitory"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/boarding2.jpg"
                alt="Students having meals"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/images/boarding3.jpg"
                alt="Boarders enjoying activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BoardingFacilities;
