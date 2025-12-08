import Image from "next/image";

const curriculum = [
  {
    id: 1,
    title: "Pre-Primary (Nursery - UKG)",
    description:
      "The Pre-Primary curriculum focuses on developing foundational skills through play-based learning, storytelling, music, art, and interactive activities. Emphasis is given to communication, creativity, motor skills, and social interaction.",
    subjects: [
      "Phonics & Early Reading",
      "Numbers & Early Math",
      "Art & Craft",
      "Music, Dance & Rhymes",
      "Storytelling & Role Play",
      "Physical Education",
    ],
  },
  {
    id: 2,
    title: "Primary (Classes I - V)",
    description:
      "The Primary curriculum encourages curiosity and learning through activity-based and experiential education. The focus is on laying a strong foundation in languages, mathematics, and environmental sciences.",
    subjects: [
      "English, Hindi & Regional Language",
      "Mathematics",
      "Environmental Studies",
      "Computer Education",
      "Art & Craft",
      "Physical Education & Sports",
    ],
  },
  {
    id: 3,
    title: "Middle School (Classes VI - VIII)",
    description:
      "The Middle School curriculum nurtures analytical and critical thinking. Students are introduced to advanced concepts in Science, Social Studies, and Mathematics while being encouraged in arts, music, and sports.",
    subjects: [
      "English, Hindi & Third Language",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Civics)",
      "Computer Science",
      "Art, Music & Sports",
    ],
  },
  {
    id: 4,
    title: "Senior School (Classes IX - XII)",
    description:
      "The Senior Secondary curriculum follows CBSE guidelines and prepares students for board examinations and higher education. Students can choose academic streams based on their interests and career goals.",
    subjects: [
      "Science Stream: Physics, Chemistry, Biology/Mathematics, Computer Science",
      "Commerce Stream: Accountancy, Business Studies, Economics, Mathematics",
      "Humanities Stream: History, Political Science, Geography, Sociology",
      "Compulsory: English Core, Physical Education/Optional Subjects",
    ],
  },
];

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/heroBanner/our-curriculum.png"
          alt="Our Curriculum"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Curriculum
          </h1>
        </div> */}
      </div>

      {/* Curriculum Sections */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-10">
        {curriculum.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-amber-800 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 mb-4">{section.description}</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {section.subjects.map((subj, idx) => (
                <li key={idx}>{subj}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Curriculum;
