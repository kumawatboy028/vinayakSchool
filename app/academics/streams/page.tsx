import Image from "next/image";

const streamsData = [
  {
    id: 1,
    title: "Science Stream",
    description:
      "The Science stream at Vinayak International School prepares students for careers in Engineering, Medicine, Research, and Technology. We offer Physics, Chemistry, Mathematics, and Biology with modern labs and expert faculty.",
    image: "https://drive.google.com/uc?id=1nZ3DNOQuogze1NTs59oOMxfGd3XGnXfJ",
  },
  {
    id: 2,
    title: "Commerce Stream",
    description:
      "The Commerce stream helps students build strong foundations in Business, Accountancy, and Economics. It opens career opportunities in Management, Finance, Banking, and Entrepreneurship.",
    image: "https://drive.google.com/uc?id=1EagSpP0wvt6JZ04ATbNe6Us2EzLuB4yV",
  },
  {
    id: 3,
    title: "Arts & Humanities Stream",
    description:
      "The Arts & Humanities stream nurtures creativity and analytical thinking. Subjects include History, Political Science, Geography, Sociology, and Psychology, preparing students for diverse professional fields.",
    image: "https://drive.google.com/uc?id=1IFzfAqjR6ZgyZrlpBRyUiZUpv5VZFeq5",
  },
];

const StreamsOffered = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[350px]">
        <Image
          src="https://drive.google.com/uc?id=1PHHcC5nj-3wlFDDnOIUmcoD30IGS2A-S"
          alt="Streams Offered"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Streams Offered
          </h1>
        </div> */}
      </div>

      {/* Streams Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-12">
        {streamsData.map((stream, index) => (
          <div
            key={stream.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={stream.image}
                alt={stream.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                {stream.title}
              </h2>
              <p className="text-gray-600">{stream.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StreamsOffered;
