import React from 'react'
import bgTitle from '@images/bgTitle.png'
import Image from 'next/image'
const TitleWrap = ({title, className}: {title: string, className?: string}) => {
  return (
    <section className={`${className} text-white uppercase h-[70px] relative flex items-center justify-center` }>
          <Image src={bgTitle} alt='' fill/>
          <span className='relative text-lg md:text-[32px] lg:text-[60px] leading-normal font-reiswar font-semibold '>{title}</span>
      </section>
  )
}

export default TitleWrap