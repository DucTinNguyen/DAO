import React from 'react'
import { TitleDoubleWrap } from '../title'
import bannerProject from "@icons/texture.svg";
import Image from 'next/image';

const BannerToken = () => {
  return (
      <main className='w-full lg:h-[560px] py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto relative'>
              <div className='flex flex-col gap-[50px] lg:flex-row lg:justify-between px-4 lg:px-0 h-full relative z-40'>
                  <TitleDoubleWrap title='The MISTOSIS' subTitle='Governance Token' className="w-[280px] h-[140px] lg:w-[415px] lg:h-[230px] mx-auto lg:mx-0 mt-24 lg:mt-0 text-center lg:text-left" />
                  <p className='text-[rgba(255,255,255,0.70)] text-lg font-medium tracking-[-0.9px] w-full lg:w-[590px] flex items-end relative z-40'>
                      MITO governance token, launching on Pump.fun, enables voting on research funding proposals. While MITOSIS holders and DAO members don&apos;t own MitosisDAO&apos;s IP/assets, they influence commercialization through governance. Details on token acquisition below.
                  </p>
              </div>
              
              <Image
                  src={bannerProject}
                  alt="banner"
                  priority
                  className="absolute w-[358px] h-[358px] top-[0px] left-1/2 -translate-x-1/2 block"
              />
          </section>
      </main>
  )
}

export default BannerToken