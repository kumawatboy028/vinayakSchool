import AuthorityMessage from "@/components/AuthorityMessage";
import Gallery from "@/components/Gallery";
import GetInTouch from "@/components/GetInTouch";
import HeroBanner from "@/components/HeroBanner";
import Infrastructure from "@/components/Infrastructure";
import LatestUpdates from "@/components/LatestUpdates";
import MissionValues from "@/components/MissionValues";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Full-width hero banner */}
      <HeroBanner />
      <MissionValues />
      <AuthorityMessage />
      <Infrastructure />
      <Gallery />
      <LatestUpdates />
      <Testimonials />
      <GetInTouch />
      {/* Rest of the page grid */}
    </div>
  );
}
