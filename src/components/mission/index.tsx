import arrow from '@icons/arrow.svg'
import Image from 'next/image'
import TitleWrap from '../title'
const OurMission = () => {
    return (
        <main className='w-full h-[600px] bg-[#0A090E] font-roBoTo relative'>
            <section className='w-full h-full lg:max-w-[1200px] mx-auto py-[120px]'>
                <section className='relative flex h-full justify-between'>
                    <div className='w-[522px] h-full'>
                        <TitleWrap title='Our mission' className='w-[400px]' />
                        <p className='text-[rgba(255,255,255,0.7)] text-lg font-normal mt-12'>MitosisDAO&apos;s mission is to enable biological replacement parts for humans, including whole-body replacement, with the ultimate goal of radically extending the human lifespan. Replacement is an engineering approach to aging that requires fewer fundamental advances in discovery in aging/biology. <br />
                            MitosisDAO is a BioDAO pioneering decentralized science. Read the articles below to learn more about BioDAOs and the DeSci movement.
                        </p>
                    </div>
                    <div className='w-[402px] 2xl:w-[513px] h-full flex items-end font-roBoTo'>
                        <ul className='w-full'>
                            <li className='flex justify-end items-center gap-3 p-4 border border-[#232226]'>
                                <p className='text-white text-sm font-normal uppercase text-end'>MitosisDAO Bible</p>
                                <Image src={arrow} alt='arrow' />
                            </li>
                            <li className='flex justify-end items-center gap-3 p-4 border border-[#232226]'>
                                <p className='text-white text-sm font-normal uppercase text-end'> BioDAOs are Community-Owned Research Translation Engines, Not Investment DAOs</p>
                                <Image src={arrow} alt='arrow' />
                            </li>
                            <li className='flex justify-end items-center gap-3 p-4 border border-[#232226]'>
                                <p className='text-white text-sm font-normal uppercase text-end'> Decentralized Science (DeSci) </p>
                                <Image src={arrow} alt='arrow' />
                            </li>
                        </ul>
                    </div>
                </section>
                
            </section>
        </main>
    )
}

export default OurMission