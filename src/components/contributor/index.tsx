import React from 'react'

import auth1 from '@images/auth.png'
import auth2 from '@images/auth2.png'
import arrUp from '@icons/arr-up.svg'
import Image from 'next/image';

const teamMembersData = [
    {
        name: "KAI MICAH MILLS",
        categories: ["Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth1
    },
    {
        name: "ELI MOHAMAD",
        categories: ["Operations", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "AUSTIN LYNCH",
        categories: ["Operations", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "HYRUM WOLF",
        categories: ["Awareness", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "EMIL KENDZIORRA",
        categories: ["Awareness", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "ALEX DOBRIN",
        categories: ["Operations", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "ADAM GRIES",
        categories: ["Operations", "Deal Flow"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "NATHAN CHENG",
        categories: ["Awareness"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    },
    {
        name: "LAI KUALIN",
        categories: ["Operations"],
        jobTitle: "FOUNDER OF CRYOPETS AND CRYODAO, THIEL FELLOW",
        imageUrl: auth2
    }
];

const Contributors = () => {
  return (
      <main className='w-full h-full py-[40px] lg:py-20 border-b-[1px] border-[#232226] font-roBoTo'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto px-4 lg:px-0'>
              <h3 className='text-white text-[32px] lg:text-[36px] font-bold tracking-[-0.72px] uppercase mb-12'>Contributors</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                  {teamMembersData.map((item, index) => {
                      return <div key={index} className='py-4 px-5 border border-[#232226] hover:border-white transition-all ease-linear duration-150 cursor-pointer'>
                          <div className='flex items-center justify-between mb-4'>
                            <h5 className='text-white text-2xl font-medium uppercase'>{item.name}</h5>
                            <Image src={arrUp} alt='arr up'/>
                          </div>
                          <div className='flex items-center gap-2'>
                              {item.categories.map((item, index) => {
                                  return <p key={index} className='rounded-lg w-fit font-medium text-sm text-white py-[6px] px-3 border-[2px] border-[#FF7120] bg-[rgba(255,255,255,0.03)] shadow-[0px_16px_20px_0px_rgba(0,0,0,0.50)]'>{item}</p>
                              })}
                          </div>
                          <figure className='w-[200px] h-[200px] mx-auto my-6'>
                              <Image src={item.imageUrl} alt=''/>
                          </figure>
                          <p className='text-white text-sm font-normal tracking-[-0.7px] uppercase'>{item.jobTitle}</p>
                      </div>
                  })}
              </div>
          </section>
      </main>
  )
}

export default Contributors