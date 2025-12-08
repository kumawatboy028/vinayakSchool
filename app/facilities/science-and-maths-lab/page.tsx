import Image from "next/image";

const ScienceMathLab = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/heroBanner/science-and-maths-lab.png"
          alt="Facilities - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Learning Beyond Classrooms
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold">Vinayak International School</span>
          , we believe in learning through exploration and hands-on experience.
          Our
          <span className="font-semibold text-indigo-600">
            {" "}
            Science & Math Labs{" "}
          </span>
          provide students with an engaging environment to experiment, innovate,
          and strengthen their conceptual understanding.
        </p>
      </section>

      {/* Science Lab Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🔬 Science Lab
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Science Lab is designed to help students learn through practical
            investigation and real-world experimentation. Equipped for Physics,
            Chemistry, and Biology, it encourages curiosity, observation, and
            analytical skills. Students perform hands-on experiments that help
            them understand scientific principles deeply and develop confidence
            in scientific inquiry.
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>Hands-on experiments for Physics, Chemistry & Biology</li>
            <li>Focus on observation, analysis & scientific reasoning</li>
            <li>Safe and well-maintained laboratory environment</li>
            <li>Learning through models, demonstrations, and experiments</li>
          </ul>
        </div>
      </section>

      {/* Math Lab Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">📐 Math Lab</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Mathematics Lab provides a space where students learn math in a
            fun, interactive, and practical manner. Using models, activities,
            puzzles, and visual tools, the Math Lab transforms abstract concepts
            into engaging learning experiences. It helps students develop
            logical thinking, problem-solving abilities, and confidence in
            mathematics.
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>Concept-building through models and manipulatives</li>
            <li>Fun mathematical activities & puzzles</li>
            <li>Encourages logical and critical thinking</li>
            <li>Interactive learning beyond the textbook</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ScienceMathLab;
