import React from 'react'
import bgWhy from '@images/why.png'
import Image from 'next/image'

import ar1 from '@icons/ar1.svg'
import ar2 from '@icons/ar2.svg'
import ar3 from '@icons/ar3.svg'
import ar4 from '@icons/ar4.svg'
const list = ['Faster, more transparent funding', 'We back research that others don’t', 'Community support every step of the way', 'Community-backed science' ]


const WhyDAO = () => {
  return (
      <main className='w-full h-full py-10 lg:py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-10 px-4 lg:px-0'>
              <div className='w-full lg:w-[533px]'>
                  <h2 className='text-white'>
                      <span className='text-[32px] lg:text-[60px] font-reiswar font-semibold mr-2'>Why</span>
                      <span className='text-[32px] lg:text-[60px] font-roBoTo font-semibold'>MitosisDAO?</span>
                  </h2>
                  <figure className='flex w-full justify-center p-10 lg:p-0 lg:w-[464px] mx-auto mt-10 relative'>
                      <Image src={ar1} alt='' className='absolute block lg:hidden top-4 left-4' />
                      <Image src={ar2} alt='' className='absolute block lg:hidden top-4 right-4' />
                      <Image src={ar3} alt='' className='absolute block lg:hidden bottom-4 right-4' />
                      <Image src={ar4} alt='' className='absolute block lg:hidden bottom-4 left-4' />
                      <Image src={bgWhy} alt='bg why' />
                  </figure>
              </div>
              <div className='w-full lg:w-[550px]'>
                  <ul>
                      {list.map((item, index) => {
                          return (
                              <li key={index} className='flex items-center'>
                                  <p className='min-h-10 w-10 h-10 flex items-center p-4 justify-center min-w-10 border border-[#232226] text-[#FF7120] text-2xl font-semibold font-reiswar'>0{index+1}</p>
                                  <p className='p-4 flex items-center text-white text-xs lg:text-sm font-medium uppercase border h-10 w-full border-[#232226]'>{item}</p>
                              </li>
                          )
                      })}
                  </ul>
                  <p className='text-[rgba(255,255,255,0.70)] text-base font-normal mt-10'>MitosisDAO is a mission-aligned community of replacement and life extension enthusiasts and professional contributors. A large and diverse community means you benefit from access to funders, communicators, technologists, and a robust network of leading researchers, all working to advance replacement science in an open and collaborative way.</p>
                  <p className='text-[rgba(255,255,255,0.70)] text-base font-normal mt-4'>MitosisDAO&apos;s Replacement Deal Flow Working Group works with you to ensure a swift and uncomplicated funding application process. Applications usually receive an answer within 2 weeks of submission.</p>
              </div>
          </section>
      </main>
  )
}

export default WhyDAO