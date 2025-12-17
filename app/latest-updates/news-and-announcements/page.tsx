// pages/news.tsx
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Annual Sports Day Celebration",
    date: "November 25, 2025",
    description:
      "Vinayak International School proudly hosted its Annual Sports Day with great enthusiasm. Students participated in athletics, volleyball, Kho-Kho, Kabaddi, and cultural performances.",
    image: "https://drive.google.com/uc?id=14ytsS7ZCjjlxbsoTiuSPFg2183Ly0-fn",
  },
];

const NewsAndAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=10ZUpRmmSn_k8NZM274qGpwVG8XrDX0pj"
          alt="Latest News and Announcements"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Latest News & Announcements
          </h1>
        </div> */}
      </div>

      {/* News Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-amber-800 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-gray-600 mb-4">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsAndAnnouncement;
