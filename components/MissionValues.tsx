import { FaBookOpen, FaUserFriends, FaAward } from "react-icons/fa";

const features = [
  {
    title: "Excellence in Education",
    description:
      "We provide comprehensive education that combines academic rigor with practical learning experiences.",
    icon: <FaBookOpen className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
  },
  {
    title: "Holistic Development",
    description:
      "We focus on developing not just academic skills but also character, creativity, and critical thinking.",
    icon: <FaUserFriends className="text-orange-500 text-2xl" />,
    bg: "bg-orange-100",
  },
  {
    title: "Future Ready",
    description:
      "Our curriculum is designed to prepare students for the challenges and opportunities of tomorrow.",
    icon: <FaAward className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
  },
];

const MissionValues = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full text-sm mb-3">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3c88] mb-4">
          Our Mission & Values
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          For over 15 years, Vinayak Education Group has been committed to
          providing world-class education that nurtures young minds and builds
          character.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${feature.bg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1f3c88] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
