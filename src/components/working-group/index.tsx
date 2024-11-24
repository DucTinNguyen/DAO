import React from 'react'
import btnApply from '@icons/apply.svg'
import Image from 'next/image'


const groups = [
    {
        title: 'Deal Flow',
        des: 'The Deal Flow WG identifies and assesses replacement projects and assets that would be aligned with the MitosisDAOAO community objectives. Members of this WG recruit academic researchers while proposing, evaluating, and monitoring prospective projects for funding.'
    },
    {
        title: 'Operations',
        des: 'The Operations WG supports the planning, execution, and monitoring of MitosisDAOAO&apos;s ongoing activities. Members of the operations WG oversee milestone timelines, find efficiencies, and incentivize operationally relevant tasks.'
    },
    {
        title: 'Awareness',
        des: 'The Awareness WG focuses on elevating the profile of MitosisDAOAO through various mediums to ensure sustainable community growth. Members of the Awareness WG create strategies and content to exposMitosisDAOsDAO to new contributors and community members.'
    },
]


const WorkingGroup = () => {
  return (
      <main className='w-full h-full py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto px-4 lg:px-0'>
              <h3 className='text-white text-[32px] lg:text-[36px] font-bold uppercase tracking-[-0.72px]'>MitosisDAO working group</h3>
              <button className='my-5 lg:my-12'><Image src={btnApply} alt='btn apply' /></button>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                  
                  {groups.map((item, index) => {
                      return <div key={index} className='py-8 px-5 border border-[#232226] bg-card-apply backdrop-blur-[10px]'>
                          <p className='rounded-lg p-[2px] bg-group-card h-[36px] w-fit font-medium text-sm text-white overflow-hidden'>
                              <span className='bg-black w-full h-full block px-3 py-[6px] rounded-lg'>{item.title}</span>
                          </p>
                          <p className='text-[rgba(255,255,255,0.70)] mt-6 text-sm font-normal'>{item.des}</p>
                      </div>
                    })}
              </div>
          </section>
      </main>
  )
}

export default WorkingGroup