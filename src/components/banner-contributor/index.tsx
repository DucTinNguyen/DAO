import joinDiscord from '@icons/join-discord.svg';
import Image from 'next/image';
import { TitleDoubleWrap } from '../title';
import lifeSpan from '@icons/lifespan.svg'
import bannerProject from "@icons/texture.svg";

const BannerContributor = () => {
  return (
      <main className='w-full h-[650px] lg:h-[434px] py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex flex-col gap-[50px] lg:flex-row lg:justify-between relative px-4 lg:px-0'>
              <div className='w-full lg:w-[420px] h-[170px] relative'>
                  <TitleDoubleWrap title='Meet the' subTitle='contributors' className="w-[280px] h-[80px] lg:w-[400px] lg:h-[150px] mx-auto lg:mx-0 mt-24 lg:mt-0 text-center lg:text-left" />
                  <Image src={lifeSpan} className='w-full h-full hidden lg:block' fill alt='' />
              </div>
              <div className="lg:w-[640px] w-full h-full">
                  <p className="text-[rgba(255,255,255,0.70)] text-lg font-normal">
                      MitosisDAO is a decentralized collective of scientists, entrepreneurs, advocates, and crypto enthusiasts working to advance replacement research in an open and democratic manner. Join us if you would like to contribute your skills to MitosisDAOAO or participate in the advancement of replacement science.
                  </p>
                  <button className='mt-5 md:mt-10 md:mx-auto w-fit lg:mx-0 block'>
                      <Image src={joinDiscord} alt="" />
                  </button>
              </div>
              <Image
                  src={bannerProject}
                  alt="banner"
                  className="absolute w-[358px] h-[358px] top-[0px] left-1/2 -translate-x-1/2 block lg:hidden"
              />
          </section>
      </main>
  )
}

export default BannerContributor