import Image from "next/image";

const videoData = [
  {
    id: 1,
    title: "Annual Day Celebration 2025",
    description: "Highlights from the school's Annual Day event.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // replace with real video URL
  },
  {
    id: 2,
    title: "Sports Day Highlights",
    description: "Exciting moments from our sports events.",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // replace with real video URL
  },
  {
    id: 3,
    title: "Science Exhibition",
    description: "Students presenting innovative science projects.",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U", // replace with real video URL
  },
];

const VideoGallery = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="relative w-full h-[300px]">
      <Image
        src="/images/heroBanner/our-gallery.png"
        alt="Video Gallery"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Video Gallery
        </h1>
      </div> */}
    </div>

    {/* Video Grid */}
    <section className="max-w-6xl mx-auto py-12 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {videoData.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-amber-800 mb-2">
              {video.title}
            </h2>
            <p className="text-gray-600 mb-4">{video.description}</p>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default VideoGallery;
