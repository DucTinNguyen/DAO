import btnDiscord from '@icons/Button.svg'
import Image from 'next/image'
import PartnerHome from '../partner-home'

const BannerHomePage = () => {
  return (
    <main className='w-full h-[calc(100vh-80px)] relative font-roBoTo bg-home-banner px-4 lg:px-0'>
          <video
              className=" absolute w-full top-0 left-0 h-full mx-auto object-cover mix-blend-multiply"
              src="images/home-video.mp4"
              typeof='video/mp4'
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
          ></video>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto relative'>
              <div className='w-full lg:w-[933px] h-[307px] absolute top-[100px] md:top-1/2 left-0 md:-translate-y-1/2'>
                  <p className='text-[#fff] text-[38px] lg:leading-[70px] lg:text-[72px] font-medium tracking-[-3.6px] uppercase lg:tracking-[-3.6px]'>Funding and incubating replacement research to extend human lifespan</p>
                  <button className='mt-10'>
                      <Image src={btnDiscord} className='w-full' alt='btn icon discord' />
                  </button>
              </div>
              <PartnerHome />
          </section>  
    </main>
  )
}

export default BannerHomePage