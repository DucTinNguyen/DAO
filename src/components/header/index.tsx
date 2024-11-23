import React from 'react'
import icLogo from '@icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link';
import btnDiscord from '@icons/btn-discord.svg'

const navigationData = [
    {
        title: "About us",
        href: "/about-us"
    },
    {
        title: "Science",
        href: "/science"
    },
    {
        title: "Project",
        href: "/project"
    },
    {
        title: "Contributor",
        href: "/contributor"
    },
    {
        title: "Mitosis Token",
        href: "/mitosis-token"
    }
];


const Header = () => {
  return (
      <main className='w-full h-[80px] bg-black font-roBoTo'>
          <section className='w-full h-full lg:max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex items-center justify-between'>
              <div className='flex items-center'>
                  <Image src={icLogo} alt='icon' />s
              </div>
              <div className='flex items-center justify-center grow'>
                  {navigationData.map((item, index) => {
                      return <Link className={`text-[#fff] text-base font-medium h-full text-center px-4 2xl:px-10`} key={index} href={item.href}>{item.title}</Link>
                  })}
              </div>
              <button className='h-full'>
                  <Image src={btnDiscord} className='w-full h-f' alt='btn icon discord'/>
              </button>
          </section>
      </main>
  )
}

export default Header