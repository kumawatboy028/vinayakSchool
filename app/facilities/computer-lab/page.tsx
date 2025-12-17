import Image from "next/image";

const ComputerLab = () => {
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
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Computer Lab
            </h1>
          </div>
        </div>
      </div>

      {/* Computer Lab Main Section */}
      <section className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-blue-800">
            Digital Learning Hub
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our computer lab is equipped with the latest technology to provide
            students with hands-on experience in coding, digital design,
            simulations, and research. It fosters digital literacy and prepares
            them for the modern world.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With high-speed internet, interactive learning modules, and
            specialized software, the lab enables innovation and creativity. It
            is a place where ideas turn into reality through technology.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="https://drive.google.com/uc?id=1zrhAdHFbb_rW32dzny7Tcsxst1I1kZMy"
            alt="Computer Lab"
            width={550}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ComputerLab;
