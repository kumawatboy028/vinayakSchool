import Image from "next/image";

const counsellingData = [
  {
    id: 1,
    title: "Personalized Guidance",
    description:
      "Our dedicated counsellors provide one-on-one sessions to help students discover their strengths, interests, and aptitudes to choose the right career path.",
    image: "/images/career-personal.jpg",
  },
  {
    id: 2,
    title: "Workshops & Seminars",
    description:
      "Regular workshops and seminars are conducted with industry experts, alumni, and professionals to expose students to various career opportunities.",
    image: "/images/career-workshop.jpg",
  },
  {
    id: 3,
    title: "Higher Education Assistance",
    description:
      "We guide students through college applications, entrance exam preparation, scholarship opportunities, and choosing the right courses for their future.",
    image: "/images/career-college.jpg",
  },
  {
    id: 4,
    title: "Skill Development",
    description:
      "Special focus is given to developing essential 21st-century skills such as communication, critical thinking, leadership, and problem-solving.",
    image: "/images/career-skills.jpg",
  },
];

const CareerCounselling = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/career-hero.jpg"
          alt="Career Counselling"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Career Counselling
          </h1>
        </div>
      </div>

      {/* Counselling Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-12">
        {counsellingData.map((counsel, index) => (
          <div
            key={counsel.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={counsel.image}
                alt={counsel.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                {counsel.title}
              </h2>
              <p className="text-gray-600">{counsel.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CareerCounselling;
