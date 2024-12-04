import arrow from '@icons/arrow.svg'
import Image from 'next/image'
import TitleWrap from '../title'
const OurMission = () => {
    return (
        <main className='w-full h-full lg:h-[600px] bg-[#0A090E] font-roBoTo relative'>
            <section className='w-full h-full lg:max-w-[1200px] mx-auto py-10 lg:py-[120px] px-4 lg:px-0'>
                <section className='relative flex flex-col gap-[70px] lg:gap-0 lg:flex-row h-full justify-between'>
                    <div className='w-full lg:w-[522px] h-full'>
                        <TitleWrap title='Our mission' className='w-[250px] lg:w-[400px]' />
                        <p className='text-[rgba(255,255,255,0.7)] text-sm lg:text-lg font-normal mt-12'>MitosisDAO strives to develop replacement biological components for human bodies - from individual parts to complete systems - as an innovative path to life extension. This engineering-focused strategy minimizes reliance on breakthrough biological research. <br />
                            As a pioneering BioDAO, MitosisDAO advances decentralized scientific research. Explore the articles below to understand BioDAOs and the DeSci movement&apos;s impact.
                        </p>
                    </div>
                    <div className='w-full lg:w-[402px] 2xl:w-[513px] h-full flex items-end font-roBoTo'>
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