import React from 'react'
import { TitleDoubleWrap } from '../title'
import bannerProject from "@icons/texture.svg";
import Image from 'next/image';

const BannerToken = () => {
  return (
      <main className='w-full lg:h-[560px] py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex flex-col gap-[50px] lg:flex-row lg:justify-between relative px-4 lg:px-0'>
              <TitleDoubleWrap title='The MISTOSIS' subTitle='Governance Token' className="w-[280px] h-[140px] lg:w-[415px] lg:h-[230px] mx-auto lg:mx-0 mt-24 lg:mt-0 text-center lg:text-left" /> 
              <p className='text-[rgba(255,255,255,0.70)] text-lg font-medium tracking-[-0.9px] w-full lg:w-[590px] flex items-end'>
                  MITOSIS, our governance token coming soon, will be used to vote on and govern replacement research funding proposals. MITOSIS token holders, along with non-token DAO members, do not own rights to MitosisDAOAO&apos;s IP or assets but can influence their commercialization and licensing through governance. Find out how to safely get MITOSIS, and learn more below.
              </p>
              <Image
                  src={bannerProject}
                  alt="banner"
                  className="absolute w-[358px] h-[358px] top-[0px] left-1/2 -translate-x-1/2 block lg:hidden"
              />
          </section>
      </main>
  )
}

export default BannerToken