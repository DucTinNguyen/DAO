import React from "react";
import bio from '@icons/bio.svg'
import uniswap from "@icons/uniswap.svg";
import Image from "next/image";
const PartnerHome = () => {
  return (
    <main className="w-full lg:w-[777px] absolute left-1/2 bottom-10 -translate-x-1/2">
      <p className="w-[200px] py-3 text-center text-white text-sm font-normal uppercase border border-[#232226] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ml-auto">
        Our Partner :
      </p>
      <section className="w-full h-[60px] lg:h-[98px] bg-[#19181C] flex items-center">
        <div className="flex-1 flex items-end justify-center gap-2">
          <Image src={bio} alt="vita" className="w-[150px] lg:w-[250px]" />
        </div>
        <div className="flex-1 flex items-start justify-center">
          <Image src={uniswap} alt="vita" className="w-[150px] lg:w-[250px]" />
        </div>
      </section>
    </main>
  );
};

export default PartnerHome;
