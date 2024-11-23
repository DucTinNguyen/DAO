import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ar1 from '@icons/ar1.svg'
import ar2 from '@icons/ar2.svg'
import ar3 from '@icons/ar3.svg'
import ar4 from '@icons/ar4.svg'
import pr1 from '@images/pr1.png'
import pr2 from '@images/pr2.png'
import arrow from '@icons/arrow.svg'
const ProjectDevelopment = () => {
  return (
      <main className='w-full h-full py-10 lg:py-[80px] border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto'>
              <h2 className='text-white text-[60px] font-reiswar font-semibold tracking-[-1.28px] leading-[60px]'>Projects <br/>
                  in Development</h2>
              <div className='flex h-[444px] mt-12'>
                  <Project img={pr1} />
                  <Project img={pr2} />
              </div>
          </section>
      </main>
  )
}

export default ProjectDevelopment

const Project = ({ img }: { img: StaticImageData }) => {
    return (
        <div className='relative group cursor-pointer'>
            <div className='absolute top-0 left-0 w-full h-full bg-hover-project opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150'></div>
            <div className='relative'>
                <div className='flex-1 p-10 border border-[#232226] relative'>
                    <Image src={ar1} alt='' className='absolute top-4 left-4' />
                    <Image src={ar2} alt='' className='absolute top-4 right-4' />
                    <Image src={ar3} alt='' className='absolute bottom-4 right-4' />
                    <Image src={ar4} alt='' className='absolute bottom-4 left-4' />

                    <figure className='w-[560px] h-[308px]'>
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