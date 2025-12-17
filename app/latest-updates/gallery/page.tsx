// pages/gallery.tsx
import Image from "next/image";

const galleryData = [
  {
    id: 1,
    title: "Annual Function Highlights",
    description: "Snapshots from our grand Annual Function celebration.",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/yourpage/posts/1234567890&show_text=true&width=500",
  },
  {
    id: 2,
    title: "Independence Day Celebration",
    description: "Students performing at the Independence Day program.",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/yourpage/posts/987654321&show_text=true&width=500",
  },
  {
    id: 3,
    title: "Art & Craft Exhibition",
    description:
      "Creative artworks displayed during our Art & Craft Exhibition.",
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/yourpage/posts/543216789&show_text=true&width=500",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://drive.google.com/uc?id=1WVxP4SMZj_1LuTwFB381T_PXed8iq8Pk"
          alt="School Gallery"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            School Gallery
          </h1>
        </div> */}
      </div>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-amber-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe
                    src={item.embedUrl}
                    width="100%"
                    height="450"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
