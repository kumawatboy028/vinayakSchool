import Image from "next/image";

const ArtAndCraft = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="Facilities - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          objectFit="revert"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">Art & Craft</h1>
          </div>
        </div>
      </div>

      {/* Art & Craft Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-pink-700">
            Creativity in Action
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our Art & Craft activities encourage students to explore their
            imagination and express themselves through colors, textures, and
            creativity. From painting and drawing to paper crafts and clay
            modeling, students develop skills that nurture innovation and
            artistic confidence.
          </p>
        </div>

        {/* Image Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/art-craft1.jpg"
              alt="Students doing art and craft"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/art-craft2.jpg"
              alt="Creative painting in class"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/art-craft3.jpg"
              alt="Craft activities by students"
              width={400}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default ArtAndCraft;
