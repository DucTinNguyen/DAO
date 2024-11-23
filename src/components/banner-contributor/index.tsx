import joinDiscord from '@icons/join-discord.svg';
import Image from 'next/image';
import { TitleDoubleWrap } from '../title';
import lifeSpan from '@icons/lifespan.svg'

const BannerContributor = () => {
  return (
      <main className='w-full h-[434px] py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto flex justify-between'>
              <div className='w-[420px] h-[170px] relative'>
                  <TitleDoubleWrap title='Meet the' subTitle='contributors' />
                  <Image src={lifeSpan} className='w-full h-full' fill alt='' />
              </div>
              <div className="lg:w-[640px] w-full h-full">
                  <p className="text-[rgba(255,255,255,0.70)] text-lg font-normal">
                      MitosisDAO is a decentralized collective of scientists, entrepreneurs, advocates, and crypto enthusiasts working to advance replacement research in an open and democratic manner. Join us if you would like to contribute your skills to MitosisDAOAO or participate in the advancement of replacement science.
                  </p>
                  <button className='mt-10'>
                      <Image src={joinDiscord} alt="" />
                  </button>
              </div>
          </section>
      </main>
  )
}

export default BannerContributor