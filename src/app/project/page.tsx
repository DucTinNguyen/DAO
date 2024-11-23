import React from 'react'
import bannerProject from '@icons/banner-project.svg'
import Image from 'next/image'
import BannerProject from '@/components/banner-project'
import ProjectDevelopment from '@/components/project-development'
import WhyDAO from '@/components/why-dao'
import Footer from '@/components/footer'
const Project = () => {
  return (
    
      <main className='bg-[#0A090E] font-roBoTo'>
          <BannerProject />
          <ProjectDevelopment />
          <WhyDAO />
          <Footer />
      </main>
    
  )
}

export default Project