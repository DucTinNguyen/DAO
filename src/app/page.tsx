import BannerHomePage from "@/components/banner-home";
import Explore from "@/components/explore";
import Footer from "@/components/footer";
import LatestProject from "@/components/latest-project";
import OurMission from "@/components/mission";

export default function Home() {
  return (
    <main className="bg-[#0A090E]">
      <BannerHomePage />
      <OurMission />
      <LatestProject />
      <Explore />
      <Footer />
    </main>
  );
}
