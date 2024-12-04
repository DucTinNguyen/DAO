import React from 'react'
import lifeSpan from '@icons/lifespan.svg'
import Image from 'next/image'
import vt1 from '@icons/vt1.svg'
import vt2 from '@icons/vt2.svg'
import vt3 from '@icons/vt3.svg'
import vt4 from '@icons/vt4.svg'
import rectangle from '@icons/rectangle.svg'
import arDownRight from '@icons/arrow-down-right.svg'
import arUp from '@icons/ar-up.svg'

const list = ['Body regeneration through embryo engineering: Creating host vessels with neural transplant capability.', 'Neural regeneration through stem cell engineering: Growing new brain tissue progressively.', 'Lab-grown youth replaces aging biology - complete regeneration from cells to systems']
const Replacement = () => {
  return (
      <main className='w-full h-full lg:h-[434px] py-[40px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[56px] lg:justify-between px-4 lg:px-0'>
              {/* left */}
              <div className='relative w-full lg:w-[508px] h-full'>
                  <Image src={lifeSpan} className='w-full h-full' fill alt='' />
                  <div className='flex flex-col justify-between h-[300px] lg:h-full'>
                      <div className='relative hidden lg:block'>
                          <h3 className='text-white text-[48px] font-bold uppercase'>Longevity biotechnology</h3>
                          <h3 className='text-white text-[48px] font-bold uppercase tracking-[-0.96px] bg-life_span leading-[56px]'>
                              <p className='relative w-fit lg:p-2 h-full'>
                                  by replacement
                                  <Image src={vt1} alt='' className='absolute top-0 left-0' />
                                  <Image src={vt4} alt='' className='absolute top-0 right-0' />
                                  <Image src={vt2} alt='' className='absolute bottom-0 right-0' />
                                  <Image src={vt3} alt='' className='absolute bottom-0 left-0' />
                              </p>
                          </h3>
                      </div>
                      <div className='relative block lg:hidden'>
                          <h3 className='text-white text-[48px] font-bold uppercase tracking-[-2.4px]'>Replacement for Lifespan</h3>
                          <h3 className='text-white text-[48px] font-bold uppercase tracking-[-2.4px] bg-life_span leading-[56px] relative w-fit px-2'>
                              <Image src={vt1} alt='' className='absolute top-0 left-0' />
                              <Image src={vt4} alt='' className='absolute top-0 right-0' />
                              <Image src={vt2} alt='' className='absolute bottom-0 right-0' />
                              <Image src={vt3} alt='' className='absolute bottom-0 left-0' />
                              <span className='relative'> Extension</span>
                          </h3>
                      </div>
                      <div className='flex justify-between relative'>
                          <figure className='flex gap-x-1'>
                              <Image src={rectangle} alt='' />
                              <Image src={rectangle} alt='' />
                              <Image src={rectangle} alt='' />
                              <Image src={rectangle} alt='' />
                          </figure>
                          <figure className='cursor-pointer'>
                              <Image src={arDownRight} alt='' />
                          </figure>
                      </div>
                  </div>
              </div>
              {/* right */}
              <div className='w-full lg:w-[585px] flex flex-col gap-6'>
                  <h4 className='text-white text-base lg:text-xl font-normal tracking-[-1px]'>Engineering replacement bypasses complex aging research, offering a direct path forward without waiting for biological breakthroughs</h4>
                  <ul className='flex flex-col gap-3'>
                      {list.map((item, index) => {
                          return <li key={index} className='flex gap-3'>
                              <span className='inline-block min-w-12 w-12 h-12 text-center p-[10px] border border-[#232226] text-2xl text-[#FF7120] font-semibold'>{index}</span>
                              <span className='text-[rgba(255,255,255,0.70)] text-sm font-normal'>{item}</span>
                          </li>
                      })}
                  </ul>
                  <button className='w-4/5 lg:w-[302px] py-2 flex items-center justify-center bg-[#FF7120] gap-2'>
                      <span className='text-[#0A090E] text-base font-medium'>LPF REPLACEMENT ROADMAP</span>
                      <Image src={arUp} alt='arrow up'/>
                  </button>
              </div>
          </section>
    </main>
  )
}

export default Replacement