import Image from "next/image";

const SchoolLibrary = () => {
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
              School Library
            </h1>
          </div>
        </div>
      </div>

      {/* Library Main Section */}
      <section className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-amber-800">
            A World of Knowledge
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our school library offers a wide collection of storybooks, academic
            references, magazines, and newspapers. With a dedicated reading
            corner and digital resources, it nurtures the love for reading and
            supports research and innovation. Students find inspiration, peace,
            and knowledge within its walls.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The library also provides access to e-books and online journals,
            ensuring that students can expand their learning beyond physical
            boundaries.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/school-library.jpg"
            alt="School Library"
            width={550}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default SchoolLibrary;
