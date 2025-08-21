import Image from "next/image";

const PressMediaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/press-hero.jpg"
          alt="Press and Media"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Press & Media
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            Featured in Press
          </h2>
          <p className="text-gray-600">
            Vinayak International School has been regularly featured in leading
            newspapers, magazines, and digital media platforms for its
            excellence in academics, extracurricular activities, and holistic
            development.
          </p>
        </div>

        {/* Media Highlights Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/images/press-article1.jpg"
                alt="Newspaper Coverage"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Times of India
              </h3>
              <p className="text-gray-600 mb-4">
                Our Annual Cultural Fest 2025 was featured in the Times of India
                highlighting the creativity and talent of our students.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/images/press-article2.jpg"
                alt="Magazine Feature"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Education World
              </h3>
              <p className="text-gray-600 mb-4">
                Recognized as one of the top emerging schools in Rajasthan for
                innovation in digital learning and modern teaching methods.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src="/images/press-article3.jpg"
                alt="TV Interview"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                Local News Channel
              </h3>
              <p className="text-gray-600 mb-4">
                Our Principal shared insights on modern education and the
                importance of extracurricular activities in child development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressMediaPage;
