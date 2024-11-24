import arRight from '@icons/ar-right.svg'
import ar1 from '@icons/ar1.svg'
import ar2 from '@icons/ar2.svg'
import ar3 from '@icons/ar3.svg'
import ar4 from '@icons/ar4.svg'
import ob1 from '@images/ob1.png'
import ob2 from '@images/ob2.png'
import ob3 from '@images/ob3.png'
import ob4 from '@images/ob4.png'
import ob5 from '@images/ob5.png'
import ob6 from '@images/ob6.png'
import Image, { StaticImageData } from 'next/image'

interface Project {
    title: string;
    description: string[];
    img: StaticImageData
}

const projectsData: Project[] = [
    {
        title: "PROGRESSIVE BRAIN REPLACEMENT",
        description: [
            "Replacement of aging brain tissue, minimizing disruption to cognitive function and allowing gradual replacement without loss of identity or memory."
        ],
        img: ob1
    },
    {
        title: "BODY TRANSPLANT PROCESS",
        description: [
            "Refine and surgical techniques for head/brain transplants.",
            "Automation for scaling and precision."
        ],
        img: ob2
    },
    {
        title: "LIMB REGENERATION",
        description: [
            "Activation of stem cells and tissue scaffolding to initiate and guide regrowth of complex tissues.",
            "Use of growth factors, gene editing and bioelectricity to replicate regenerative capabilities similar to those found in species like axolotls."
        ],
        img: ob3
    },
    {
        title: "CLONED NON-SENTIENT BODIES",
        description: [
            "Develop and test gene editing for clone neocortex knockout.",
            "Achieve near zero false-negative knockout rate."
        ],
        img: ob4
    },
    {
        title: "BIOPRINTING",
        description: [
            "Scaled production of bioprinted organs using organ-specific bioinks.",
            "Ensuring vascularization and functional integration within printed organs."
        ],
        img: ob5
    },
    {
        title: "XENOTRANSPLANTATION",
        description: [
            "Genetic modification of donor animals to prevent rejection and enhance compatibility.",
            "Development of protocols to induce immune tolerance in human recipients."
        ],
        img: ob6
    }
];

const Objectives = () => {
  return (
    <main className='w-full h-full py-[60px]'>
        <section className='w-full h-full lg:max-w-[1200px] mx-auto px-4 lg:px-0'>
            <h2 className='text-white font-bold text-[32px] lg:text-[36px] uppercase leading-normal mb-12'>MitosisDAO objectives</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
                  {projectsData.map((item, index) => {
                      return <ObjectiveItem key={index} title={item.title} description={item.description} img={item.img} />
                  })}
              </div>  
        </section>
    </main>
  )
}

export default Objectives


const ObjectiveItem = ({title, description, img}: Project) => {
    return (
        <div className='relative group cursor-pointer'>
            <div className='absolute top-0 left-0 w-full h-full bg-hover-project opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150'></div>
            <div className='relative border-[1px] border-[#232226] h-[720px]'>
                <div className='flex-1 p-10 border border-[#232226] group-hover:border-transparent relative'>
                    <Image src={ar1} alt='' className='absolute top-4 left-4' />
                    <Image src={ar2} alt='' className='absolute top-4 right-4' />
                    <Image src={ar3} alt='' className='absolute bottom-4 right-4' />
                    <Image src={ar4} alt='' className='absolute bottom-4 left-4' />

                    <figure className='w-full h-[300px] lg:h-[308px] overflow-hidden'>
                        <Image src={img} alt='pr' className='w-full h-full' objectFit='cover' objectPosition='center' />
                    </figure>
                </div>
                <div className='p-4 border-t-[1px] border-t-[#232226] group-hover:border-transparent'>
                    <h3 className='text-white text-base lg:text-xl font-medium uppercase tracking-[-1px] mb-3'>{title}</h3>
                    <ul className='flex flex-col gap-3'>
                        {description.map((item, index) => {
                            return <li className='flex gap-3 items-start' key={index}>
                                <Image src={arRight} alt='' className='mt-2' />
                                <span className='text-[rgba(255,255,255,0.70)] text-sm lg:text-lg font-normal tracking-[-0.9px]'>{item}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
   )
}