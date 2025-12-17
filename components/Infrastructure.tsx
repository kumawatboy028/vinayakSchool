import Image from "next/image";
import {
  FaDesktop,
  FaGamepad,
  FaBus,
  FaBook,
  FaMicroscope,
  FaTv,
} from "react-icons/fa";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Interactive digital boards and modern teaching aids for enhanced learning experience.",
    icon: <FaDesktop className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
    image: "https://drive.google.com/uc?id=1x0Ry2SFRNboDJAmI9H-61fX4ncO_pxT2",
  },
  {
    title: "Sports Complex",
    description:
      "Multi-sport playground with basketball, volleyball, and cricket facilities.",
    icon: <FaGamepad className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
    image: "https://drive.google.com/uc?id=1KD1jxNc9bwC4rJqy_cGFj5rjufcfwHzB",
  },
  {
    title: "Safe Transport",
    description:
      "GPS-enabled buses with trained drivers ensuring safe commute for students.",
    icon: <FaBus className="text-purple-600 text-2xl" />,
    bg: "bg-purple-100",
    image: "https://drive.google.com/uc?id=1WxP4ULT5VPWj4Hes_NIQCeAzUq65JFxo",
  },
  {
    title: "Modern Library",
    description:
      "Extensive collection of books, digital resources, and quiet study spaces.",
    icon: <FaBook className="text-orange-600 text-2xl" />,
    bg: "bg-purple-100",
    image: "https://drive.google.com/uc?id=1qr85moM3GrtlnwS8Zy4_sBt_h7PK2Bct",
  },
  {
    title: "Science Lab",
    description:
      "Well-equipped physics, chemistry, and biology labs for hands-on learning.",
    icon: <FaMicroscope className="text-red-600 text-2xl" />,
    bg: "bg-purple-100",
    image: "https://drive.google.com/uc?id=1vXpVXCgzxNLLq0IBfeHVeFZDkX9L2wvx",
  },
  {
    title: "Computer Lab",
    description:
      "Latest computers with high-speed internet for digital literacy programs.",
    icon: <FaTv className="text-teal-600 text-2xl" />,
    bg: "bg-purple-100",
    image: "https://drive.google.com/uc?id=1zrhAdHFbb_rW32dzny7Tcsxst1I1kZMy",
  },
];

const Infrastructure = () => {
  return (
    <section className="w-full py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm mb-3">
          Our Facilities
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f3c88] mb-4">
          World-Class Infrastructure
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our state-of-the-art facilities provide the perfect environment for
          learning, growth, and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${facility.bg}`}
                >
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1f3c88] mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {facility.description}
                </p>
              </div>
              <div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
