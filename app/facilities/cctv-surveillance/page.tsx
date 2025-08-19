import Image from "next/image";

const CCTVSurveillance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/cctv-hero.jpg"
          alt="CCTV Surveillance - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              24 Hours CCTV Surveillance
            </h1>
          </div>
        </div>
      </div>

      {/* CCTV Section */}
      <section className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center mt-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-amber-800">
            Ensuring Safety at Every Step
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The safety of our students is our utmost priority. Our campus is
            equipped with **24/7 CCTV surveillance**, ensuring a secure
            environment where learning can take place without worries.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every corner of the school is carefully monitored, giving parents
            and guardians peace of mind. With advanced surveillance systems, we
            make sure our students are always protected within school premises.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/cctv-surveillance.jpg"
            alt="CCTV Cameras in School"
            width={550}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default CCTVSurveillance;
