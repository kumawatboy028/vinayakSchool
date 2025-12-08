import Image from "next/image";

const honorsData = [
  {
    id: 1,
    title: "Academic Excellence",
    description:
      "Our students have consistently secured top positions in board examinations with outstanding results, setting benchmarks of academic brilliance every year.",
    image: "/images/honor-academic.jpg",
  },
  {
    id: 2,
    title: "Sports Achievements",
    description:
      "Vinayak International School athletes have represented the district and state in various sports tournaments, bringing home medals and trophies of pride.",
    image: "/images/honor-sports.jpg",
  },
  {
    id: 3,
    title: "Cultural & Arts Recognition",
    description:
      "Students have earned accolades in inter-school cultural festivals, art competitions, debates, and music & dance contests at regional and national levels.",
    image: "/images/honor-cultural.jpg",
  },
  {
    id: 4,
    title: "Community & Leadership Awards",
    description:
      "Our students actively participate in community service, leadership programs, and social initiatives, winning appreciation and awards from reputed organizations.",
    image: "/images/honor-leadership.jpg",
  },
];

const RanksHonors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/heroBanner/ranks-and-honors.png"
          alt="Ranks and Honors"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Ranks & Honors
          </h1>
        </div> */}
      </div>

      {/* Honors Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-12">
        {honorsData.map((honor, index) => (
          <div
            key={honor.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={honor.image}
                alt={honor.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                {honor.title}
              </h2>
              <p className="text-gray-600">{honor.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RanksHonors;
