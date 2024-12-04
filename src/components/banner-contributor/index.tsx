import btnCommunity from "@icons/btn-community.svg";
import Image from 'next/image';
import { TitleDoubleWrap } from '../title';
import lifeSpan from '@icons/lifespan.svg'
import bannerProject from "@icons/texture.svg";
import Link from 'next/link';

const BannerContributor = () => {
  return (
      <main className='w-full h-[650px] lg:h-[434px] py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto relative'>
              <div className='flex flex-col gap-[50px] lg:flex-row lg:justify-between relative z-40 px-4 lg:px-0'>
                  <div className='w-full lg:w-[420px] h-[170px] relative'>
                      <TitleDoubleWrap title='Meet the' subTitle='contributors' className="w-[280px] h-[80px] lg:w-[400px] lg:h-[150px] mx-auto lg:mx-0 mt-24 lg:mt-0 text-center lg:text-left" />
                      <Image src={lifeSpan} className='w-full h-full hidden lg:block' fill alt='' />
                  </div>
                  <div className="lg:w-[640px] w-full h-full">
                      <p className="text-[rgba(255,255,255,0.70)] text-lg font-normal">
                          MitosisDAO unites scientists, entrepreneurs, and innovators advancing replacement research through decentralized collaboration. Join our mission to transform regenerative medicine
                      </p>
                      <Link href={"https://t.me/MitosisDAO"} target="_blank">
                          <button className='mt-5 md:mt-10 md:mx-auto w-fit lg:mx-0 block'>
                              <Image
                                  src={btnCommunity}
                                  className="w-full"
                                  alt="btn icon discord"
                              />
                          </button>
                      </Link>
                  </div>
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