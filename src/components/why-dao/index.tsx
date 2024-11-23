import React from 'react'
import bgWhy from '@images/why.png'
import Image from 'next/image'


const list = ['Faster, more transparent funding', 'We back research that others don’t', 'Community support every step of the way', 'Community-backed science' ]


const WhyDAO = () => {
  return (
      <main className='w-full h-full py-10 lg:py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex justify-between gap-10'>
              <div className='w-[533px]'>
                  <h2 className='text-white'>
                      <span className='text-[60px] font-reiswar font-semibold mr-2'>Why</span>
                      <span className='text-[60px] font-roBoTo font-semibold'>MitosisDAO?</span>
                  </h2>
                  <figure className='flex w-[464px] mx-auto mt-10'>
                      <Image src={bgWhy} alt='bg why' />
                  </figure>
              </div>
              <div className='w-[550px]'>
                  <ul>
                      {list.map((item, index) => {
                          return (
                              <li key={index} className='flex items-center'>
                                  <p className=' w-10 h-10 flex items-center p-4 justify-center min-w-10 border border-[#232226] text-[#FF7120] text-2xl font-semibold font-reiswar'>0{index+1}</p>
                                  <p className='p-4 text-white text-sm font-medium uppercase'>{item}</p>
                              </li>
                          )
                      })}
                  </ul>
                  <p className='text-[rgba(255,255,255,0.70)] text-base font-normal mt-10'>MitosisDAO is a mission-aligned community of replacement and life extension enthusiasts and professional contributors. A large and diverse community means you benefit from access to funders, communicators, technologists, and a robust network of leading researchers, all working to advance replacement science in an open and collaborative way.</p>
                  <p className='text-[rgba(255,255,255,0.70)] text-base font-normal mt-4'>MitosisDAO's Replacement Deal Flow Working Group works with you to ensure a swift and uncomplicated funding application process. Applications usually receive an answer within 2 weeks of submission.</p>
              </div>
          </section>
      </main>
  )
}

export default WhyDAO