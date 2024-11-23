import React from 'react'
import { TitleDoubleWrap } from '../title'

const Earn = () => {
  return (
      <main className='w-full h-full py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto'>
              <TitleDoubleWrap title='earn' subTitle='MISTOSIS' titleStyle='text-[32px] font-semibold text-center' className='w-[190px] mx-auto' subStyle='text-[32px]' />
              <p className='text-[rgba(255,255,255,0.70)] text-lg font-medium w-[776px] mx-auto text-center mt-6'>
                  Working group members can earn governance power in MitosisDAOAO via MITOSIS by contributing their time and effort in the DAO. This can include sourcing, evaluating and incubating replacement research projects, forming partnerships, social media/community management, and much more.
              </p>
          </section>
      </main>
  )
}

export default Earn