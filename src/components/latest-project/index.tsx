import React from 'react'
import TitleWrap from '../title'
import ar1 from '@icons/ar1.svg'
import ar2 from '@icons/ar2.svg'
import ar3 from '@icons/ar3.svg'
import ar4 from '@icons/ar4.svg'
import Image, { StaticImageData } from 'next/image'
import pr1 from '@images/pr1.png'
import pr2 from '@images/pr2.png'
import arrow from '@icons/arrow.svg'

const LatestProject = () => {
  return (
      <main className='w-full h-full lg:h-[697px] bg-[#0A090E]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto py-[60px] px-4 lg:px-0'>
              <TitleWrap title='Latest Project' className='w-[300px] mx-auto lg:mx-0 lg:w-[560px]'/>
              <div className='grid grid-cols-1 md:grid-cols-2 h-full lg:h-[444px] mt-12'>
                  <Project img={pr1}/>
                  <Project img={pr2} />
              </div>
          </section>
      </main>
  )
}

export default LatestProject


const Project = ({ img }: {img: StaticImageData}) => {
    return (
        <div className='relative group cursor-pointer max-w-full'>
            <div className='absolute top-0 left-0 w-full h-full bg-hover-project opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150'></div>
            <div className='relative'>
                <div className='flex-1 p-10 border border-[#232226] relative'>
                    <Image src={ar1} alt='' className='absolute top-4 left-4' />
                    <Image src={ar2} alt='' className='absolute top-4 right-4' />
                    <Image src={ar3} alt='' className='absolute bottom-4 right-4' />
                    <Image src={ar4} alt='' className='absolute bottom-4 left-4' />

                    <figure className='w-full lg:w-full lg:h-[308px]'>
                        <Image src={img} alt='pr' />
                    </figure>
                </div>
                <p className='flex justify-end items-center gap-3 p-4 border border-[#232226]'>
                    <span className='text-white text-sm font-normal uppercase text-end'>Coming soon</span>
                    <Image src={arrow} alt='arrow' />
                </p>
            </div>
        </div>
    )
}