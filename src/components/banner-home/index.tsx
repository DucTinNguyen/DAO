import btnCommunity from "@icons/btn-community.svg";
import Image from "next/image";
import PartnerHome from "../partner-home";
import Link from "next/link";

const BannerHomePage = () => {
  return (
    <main className="w-full h-[calc(100vh-80px)] relative font-roBoTo bg-home-banner px-4 lg:px-0">
      <video
        className=" absolute w-full top-0 left-0 h-full mx-auto object-cover mix-blend-multiply"
        src="images/home-video.mp4"
        typeof="video/mp4"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <section className="w-full h-full lg:max-w-[1200px] mx-auto relative">
        <div className="w-full lg:w-[933px] h-[307px] absolute top-[100px] md:top-[40%] left-0 md:-translate-y-1/2">
          <p className="text-[#fff] text-[34px] lg:leading-[70px] lg:text-[72px] font-medium tracking-[-3.6px] uppercase lg:tracking-[-3.6px]">
            Supporting research to develop alternatives extending human
            longevity
          </p>
          <Link href={"https://t.me/MitosisDAO"} target="_blank">
            <button className="mt-10">
              <Image
                src={btnCommunity}
                className="w-full"
                alt="btn icon discord"
              />
            </button>
          </Link>
        </div>
        <PartnerHome />
      </section>
    </main>
  );
};

export default BannerHomePage;
