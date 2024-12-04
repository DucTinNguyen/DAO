import React from 'react'
import imgExplore from '@images/explore.png'
import Image from 'next/image'
import btnExplore from '@images/btnExplore.svg'
const Explore = () => {
  return (
    <main className='w-full h-full lg:h-[431px] font-roBoTo px-4 lg:px-4'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto py-10 lg:py-[60px] flex flex-col lg:flex-row'>
              <figure className='flex-1 w-full h-full'>
                  <Image className='w-full h-full' src={imgExplore} alt=''/>
              </figure>
              <div className='flex-1 p-5 flex flex-col justify-between'>
                  <div>
                      <p className='text-white text-2xl font-medium uppercase'>Substitute old parts with youth.</p>
                      <p className='text-[rgba(255,255,255,0.70)] mt-3 text-base font-normal'>Lab-grown tissue replaces aged components. Engineering solves aging through replacement.</p>
                  </div>
                  <button className='mt-5 lg:mt-0'>
                      <Image src={btnExplore} alt=''/>
                  </button>
              </div>
          </section>
    </main>
  )
}

export default Explore