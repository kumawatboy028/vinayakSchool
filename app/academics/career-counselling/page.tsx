import Image from "next/image";

const counsellingData = [
  {
    id: 1,
    title: "Personalized Guidance",
    description:
      "Our dedicated counsellors provide one-on-one sessions to help students discover their strengths, interests, and aptitudes to choose the right career path.",
  },
  {
    id: 2,
    title: "Workshops & Seminars",
    description:
      "Regular workshops and seminars are conducted with industry experts, alumni, and professionals to expose students to various career opportunities.",
  },
  {
    id: 3,
    title: "Higher Education Assistance",
    description:
      "We guide students through college applications, entrance exam preparation, scholarship opportunities, and choosing the right courses for their future.",
  },
  {
    id: 4,
    title: "Skill Development",
    description:
      "Special focus is given to developing essential 21st-century skills such as communication, critical thinking, leadership, and problem-solving.",
  },
];

const CareerCounselling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <Image
          src="/images/schoolOverview.jpg"
          alt="Career Counselling"
          fill
          className="object-revert object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Career Counselling
          </h1>
        </div>
      </div>

      {/* Counselling Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
        {counsellingData.map((counsel) => (
          <div
            key={counsel.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              {counsel.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {counsel.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CareerCounselling;
