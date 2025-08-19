import Image from "next/image";

const ScienceMathLab = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              Science And Maths Lab
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Learning Beyond Classrooms
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold">Vinayak International School</span>
          , we believe in learning through exploration and practical experience.
          Our
          <span className="font-semibold text-indigo-600">
            {" "}
            Science & Math Labs{" "}
          </span>
          provide students with a hands-on environment to experiment, innovate,
          and strengthen their conceptual understanding.
        </p>
      </section>

      {/* Science Lab Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🔬 Science Lab
          </h3>
          <p className="text-gray-600 mb-8">
            Our well-equipped science laboratory enables students to experiment,
            observe, and explore scientific concepts. The lab promotes
            curiosity, critical thinking, and a strong foundation in subjects
            like Physics, Chemistry, and Biology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <Image
                src="/images/science1.jpg"
                alt="Students in Science Lab"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/images/science2.jpg"
                alt="Students experimenting"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/images/science3.jpg"
                alt="Science practical work"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Math Lab Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📐 Math Lab</h3>
          <p className="text-gray-600 mb-8">
            The Mathematics Lab is designed to help students discover the joy of
            learning math through puzzles, models, activities, and visual
            experiments. It encourages logical thinking, problem-solving skills,
            and a deeper understanding of mathematical concepts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <Image
                src="/images/math1.jpg"
                alt="Students solving puzzles"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/images/math2.jpg"
                alt="Math Lab Activity"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              <Image
                src="/images/math3.jpg"
                alt="Students learning with models"
                width={400}
                height={300}
                className="rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ScienceMathLab;
