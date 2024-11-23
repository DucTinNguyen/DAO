import btnSubmit from "@icons/submit.svg";
import bannerProject from "@icons/texture.svg";
import Image from "next/image";
import { TitleDoubleWrap } from "../title";
const BannerProject = () => {
  return (
    <main className="w-full h-[357px] py-[40px] border-b-[1px] border-[#232226]">
      <section className="w-full h-full lg:max-w-[1200px] mx-auto flex justify-between relative">
        <TitleDoubleWrap
          title="MitosisDAO"
          subTitle="Project"
          className="w-[400px] h-[170px]"
        />
        <div className="lg:w-[640px] w-full h-full flex flex-col justify-between">
          <p className="text-[rgba(255,255,255,0.70)] text-lg font-normal">
            MitosisDAOAO is a BioDAO funding research in tissue, organ, and
            whole-body replacement. Funds raised bMitosisDAOsDAO are used to
            advance promising replacement research projects. If you have a
            project in the field of replacement and would like to apply for
            funding, please submit a proposal.
          </p>
          <button>
            <Image src={btnSubmit} alt="" />
          </button>
        </div>
        <Image
          src={bannerProject}
          alt="banner"
          className="absolute top-[-80px] left-[20%]"
        />
      </section>
    </main>
  );
};

export default BannerProject;
