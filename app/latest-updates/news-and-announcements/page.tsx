// pages/news.tsx
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Annual Sports Day Celebration",
    date: "March 10, 2025",
    description:
      "Vinayak International School proudly hosted its Annual Sports Day with great enthusiasm. Students participated in athletics, football, cricket, and cultural performances.",
    image: "/images/news-sports.jpg",
  },
  {
    id: 2,
    title: "Science Exhibition 2025",
    date: "February 20, 2025",
    description:
      "Our budding scientists showcased their creativity and innovation in the Annual Science Exhibition. Parents and guests appreciated the projects presented by the students.",
    image: "/images/news-science.jpg",
  },
  {
    id: 3,
    title: "Yoga & Wellness Week",
    date: "January 15, 2025",
    description:
      "To promote holistic health, the school organized a Yoga & Wellness Week where students actively participated in yoga sessions and wellness workshops.",
    image: "/images/news-yoga.jpg",
  },
];

const NewsAndAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/news-hero.jpg"
          alt="Latest News and Announcements"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Latest News & Announcements
          </h1>
        </div>
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
                  className="object-cover"
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
