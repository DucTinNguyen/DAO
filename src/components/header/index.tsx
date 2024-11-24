'use client'
import React, { useState } from 'react'
import icLogo from '@icons/logoApp.svg'
import Image from 'next/image'
import Link from 'next/link';
import btnDiscord from '@icons/btn-discord.svg'
import { usePathname, useRouter } from 'next/navigation';
import icHamburger from '@icons/icBar.svg'
import arrow from '@icons/arrow.svg'
import icClose from '@icons/close.svg'

const navigationData = [
    {
        title: "About us",
        href: "/"
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

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


  return (
      <main className='w-full h-[80px] bg-black font-roBoTo px-4 lg:px-0'>
          <section className='w-full h-full lg:max-w-[1200px] 2xl:max-w-[1400px] mx-auto flex items-center justify-between relative z-[51]'>
              <div className='flex items-center'>
                  <Image src={icLogo} alt='icon' />s
              </div>
            {/* desktop */}
              <div className='hidden lg:flex items-center invisible lg:visible justify-center grow'>
                  {navigationData.map((item, index) => {
                      return <Link className={`text-[#fff] text-base font-medium h-full border-b-[2px] transition-all ease-linear duration-200 hover:border-b-[#FF7120] py-4 text-center px-4 2xl:px-10 ${item.href === pathname ? 'border-b-[#FF7120]' : 'border-b-transparent'}`} key={index} href={item.href}>{item.title}</Link>
                  })}
              </div>
              <button className='h-full hidden lg:flex invisible lg:visible'>
                  <Image src={btnDiscord} className='w-full h-f' alt='btn icon discord'/>
              </button>
              {/* mobile */}
              <figure className='block lg:hidden' onClick={() => { handleClick() }}>
                  {!isOpen ? <Image src={icHamburger} alt=''/> : <Image src={icClose} alt=''/>}
            </figure>
          </section>
          <SideBar isOpen={isOpen} onClick={handleClick} />
      </main>
  )
}

export default Header

const SideBar = ({ isOpen , onClick}: { isOpen: boolean, onClick: ()=> void }) => {
    
    const router = useRouter();

    const handleRouter = (href: string) => {
        router.push(href);
        onClick()
    }


    return (
        <ul className={`${isOpen ? 'w-full visible' : 'w-0 opacity-0 invisible'} z-50 transition-all ease-linear duration-150 h-full fixed top-0 pt-20 left-0  bg-[#0A090E] block lg:hidden`}>
            {navigationData.map((item, index) => {
                return <li onClick={()=>{handleRouter(item.href)}} key={index} className='flex cursor-pointer justify-between items-center gap-3 p-4 border border-[#232226] bg-[#0A090E]'>
                    <p className='text-white text-sm font-normal uppercase text-end'>{item.title}</p>
                    <Image src={arrow} alt='arrow' />
                </li>
            })}
        </ul>
    )
}