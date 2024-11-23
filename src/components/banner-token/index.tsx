import React from 'react'
import { TitleDoubleWrap } from '../title'

const BannerToken = () => {
  return (
      <main className='w-full h-[560px] py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex justify-between relative'>
              <TitleDoubleWrap title='The MISTOSIS' subTitle='Governance Token' className='w-[420px] h-[230px]' /> 
              <p className='text-[rgba(255,255,255,0.70)] text-lg font-medium tracking-[-0.9px] w-[590px] flex items-end'>
                  MITOSIS, our governance token coming soon, will be used to vote on and govern replacement research funding proposals. MITOSIS token holders, along with non-token DAO members, do not own rights to MitosisDAOAO's IP or assets but can influence their commercialization and licensing through governance. Find out how to safely get MITOSIS, and learn more below.
              </p>
          </section>
      </main>
  )
}

export default BannerToken