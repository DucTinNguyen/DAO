import React from 'react'
import bgTitle from '@images/bgTitle.png'
import Image from 'next/image'
const TitleWrap = ({ title, className }: { title: string, className?: string }) => {
  return (
    <section className={`${className} text-white uppercase h-[70px] relative flex items-center justify-center`}>
      <Image src={bgTitle} alt='' fill />
      <span className='relative block text-lg md:text-[32px] lg:text-[60px] leading-normal font-reiswar font-semibold '>
        {title}
      </span>
    </section>
  )
}

export default TitleWrap


export const TitleDoubleWrap = ({ title, subTitle, className, titleStyle, subStyle }: { title: string, titleStyle?: string, subStyle?: string ,className?: string, subTitle?: string }) => {
  return (
    <section className={`${className} text-white relative flex flex-col justify-center px-6`}>
      <Image src={bgTitle} alt='' fill />
      <span className={`relative block  text-left font-roBoTo font-semibold ${titleStyle  ? titleStyle : 'text-lg md:text-[32px] lg:text-[50px] leading-normal'}`}>
        {title}
      </span>
      <span className={`relative block font-reiswar font-semibold ${subStyle  ? subStyle : 'text-lg md:text-[32px] lg:text-[50px] leading-normal'}`}>
        {subTitle}
      </span>
    </section>
  )
}




