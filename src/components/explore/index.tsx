import React from 'react'
import imgExplore from '@images/explore.png'
import Image from 'next/image'
import btnExplore from '@images/btnExplore.svg'
const Explore = () => {
  return (
    <main className='w-full h-[431px] font-roBoTo'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto py-[60px] flex'>
              <figure className='flex-1 w-full h-full'>
                  <Image className='w-full h-full' src={imgExplore} alt=''/>
              </figure>
              <div className='flex-1 p-5 flex flex-col justify-between'>
                  <div>
                      <p className='text-white text-2xl font-medium uppercase'>Replace old parts with young.</p>
                      <p className='text-[rgba(255,255,255,0.70)] mt-3 text-base font-normal'>Total replacement of aged body parts with lab grown young parts. An engineering approach to solving aging.</p>
                  </div>
                  <button>
                      <Image src={btnExplore} alt=''/>
                  </button>
              </div>
          </section>
    </main>
  )
}

export default Explore