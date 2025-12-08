import Image from "next/image";

const MorningAssembly = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="relative w-full h-[300px]">
      <Image
        src="/images/banners/morning_assembly.jpg" // replace with your assembly image
        alt="Morning Assembly"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Morning Assembly
        </h1>
      </div>
    </div>

    {/* Content Section */}
    <section className="max-w-5xl mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-amber-800 mb-6">
        A Positive Start to the Day
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        The morning assembly is an integral part of our school routine. It
        instills discipline, unity, and a sense of belonging among students.
        Every day begins with prayer, moral thoughts, and motivational messages
        that set the tone for a productive and positive school day.
      </p>

      <div className="grid gap-10 md:grid-cols-2 text-left">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-amber-700 mb-3">
            Daily Routine
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Morning prayer and school pledge</li>
            <li>Thought of the day</li>
            <li>News headlines and important updates</li>
            <li>Motivational speech or story</li>
            <li>National anthem</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-amber-700 mb-3">
            Benefits for Students
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Encourages discipline and punctuality</li>
            <li>Builds confidence in public speaking</li>
            <li>Develops moral values and ethics</li>
            <li>Strengthens unity and teamwork</li>
            <li>Creates a positive learning atmosphere</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default MorningAssembly;
