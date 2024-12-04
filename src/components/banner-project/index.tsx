import btnSubmit from "@icons/submit.svg";
import bannerProject from "@icons/texture.svg";
import Image from "next/image";
import { TitleDoubleWrap } from "../title";
const BannerProject = () => {
  return (
    <main className="w-full h-[550px] lg:h-[357px] py-[40px] border-b-[1px] border-[#232226]">
      <section className="w-full h-full lg:max-w-[1200px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:justify-between relative z-40 px-4 lg:px-0">
          <TitleDoubleWrap
            title="MitosisDAO"
            subTitle="Project"
            className="w-[230px] h-[80px] lg:w-[330px] lg:h-[150px] mx-auto lg:mx-0 mt-24 lg:mt-0 text-center lg:text-left"
          />
          <div className="lg:w-[640px] w-full h-full flex flex-col justify-between">
            <p className="text-[rgba(255,255,255,0.70)] text-sm lg:text-lg font-normal">
              MitosisDAOAO is a BioDAO funding research in tissue, organ, and
              whole-body replacement. Funds raised bMitosisDAOsDAO are used to
              advance promising replacement research projects. If you have a
              project in the field of replacement and would like to apply for
              funding, please submit a proposal.
            </p>
            <button className="mt-10 lg:mt-0 md:mx-auto lg:mx-0">
              <Image src={btnSubmit} alt="" />
            </button>
          </div>
        </div>
        
        <Image
          src={bannerProject}
          alt="banner"
          className="absolute w-[358px] h-[358px] top-[0px] left-1/2 -translate-x-1/2 lg:top-[-80px] lg:w-auto lg:h-auto lg:left-[20%]"
        />
      </section>
    </main>
  );
};

export default BannerProject;
