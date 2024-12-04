import React from "react";
import vita from "@icons/pumpfun.svg";
import cryo from "@icons/raydium.svg";
import Image from "next/image";
const PartnerHome = () => {
  return (
    <main className="w-full lg:w-[777px] absolute left-1/2 bottom-10 -translate-x-1/2">
      <p className="w-[200px] py-3 text-center text-white text-sm font-normal uppercase border border-[#232226] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ml-auto">
        Our Partner :
      </p>
      <section className="w-full h-[60px] lg:h-[98px] bg-[#19181C] flex items-center">
        <div className="flex-1 flex items-center justify-center gap-2">
          <Image src={vita} alt="vita" className="w-[122px] lg:w-[200px] mix-blend-lighten" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image src={cryo} alt="vita" className="w-[122px] lg:w-[200px]" />
        </div>
      </section>
    </main>
  );
};

export default PartnerHome;
