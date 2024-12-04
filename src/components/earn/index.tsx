import React from 'react'
import { TitleDoubleWrap } from '../title'

const Earn = () => {
  return (
      <main className='w-full h-full py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto'>
              <TitleDoubleWrap title='Earn' subTitle='MISTOSIS' titleStyle='text-[32px] font-semibold text-center' className='w-[190px] mx-auto' subStyle='text-[32px]' />
              <p className='text-[rgba(255,255,255,0.70)] text-lg font-medium w-full lg:w-[776px] mx-auto text-center mt-6'>
                  Members earn MITO tokens through active contributions: sourcing projects, evaluating research, building partnerships, and managing community growth. Governance power scales with participation.
              </p>
          </section>
      </main>
  )
}

export default Earn