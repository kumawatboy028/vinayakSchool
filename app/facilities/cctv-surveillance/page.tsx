import Image from "next/image";

const CCTVSurveillance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[320px]">
        <Image
          src="/images/heroBanner/cctv-surrveillance.png"
          alt="CCTV Surveillance - Vinayak International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* CCTV Section */}
      <section className="max-w-6xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 space-y-6">
          <h2 className="text-3xl font-bold text-amber-800">
            Ensuring Safety at Every Step
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The safety of our students is our utmost priority. Our campus is
            equipped with{" "}
            <span className="font-semibold">24/7 CCTV surveillance</span>,
            ensuring a secure environment where learning can take place without
            any worry.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Every area of the school—from classrooms and corridors to
            playgrounds and activity zones—is carefully monitored. This provides
            parents with peace of mind knowing that their children are in a safe
            and protected environment throughout the school day.
          </p>

          {/* Key Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {[
              {
                title: "24/7 Monitoring",
                desc: "Continuous surveillance across campus to ensure student safety at all times.",
              },
              {
                title: "High-Coverage Cameras",
                desc: "Strategically placed cameras covering classrooms, corridors, and outdoor areas.",
              },
              {
                title: "Real-Time Tracking",
                desc: "Instant access for security personnel to monitor activities in real time.",
              },
              {
                title: "Secure Environment",
                desc: "Provides a safe, disciplined, and well-supervised environment for learning.",
              },
              {
                title: "Emergency Response",
                desc: "Quick action and coordination through centralized surveillance systems.",
              },
              {
                title: "Peace of Mind",
                desc: "Parents feel confident knowing their children are in safe hands.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTVSurveillance;
