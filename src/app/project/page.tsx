import BannerProject from '@/components/banner-project'
import Footer from '@/components/footer'
import ProjectDevelopment from '@/components/project-development'
import WhyDAO from '@/components/why-dao'
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