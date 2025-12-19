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
          className="object-revert object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">Art & Craft</h1>
          </div>
        </div>
      </div>

      {/* Art & Craft Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Simple Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3c88] mb-4">
            Creativity in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From messy brushes to creative clay, we provide the tools for every
            child to express their unique imagination.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Painting & Drawing",
              desc: "Exploring watercolors, sketching, and artistic expression.",
              color: "border-pink-500",
            },
            {
              title: "Paper Crafts",
              desc: "Learning origami, card making, and creative cutting.",
              color: "border-blue-500",
            },
            {
              title: "Clay Modeling",
              desc: "Building 3D structures and developing fine motor skills.",
              color: "border-orange-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-8 bg-white border-t-4 ${item.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-default`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtAndCraft;
