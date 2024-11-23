import React from 'react'
import btnApply from '@icons/apply.svg'
import Image from 'next/image'
const WorkingGroup = () => {
  return (
      <main className='w-full h-full py-[40px] lg:py-20 border-b-[1px] border-[#232226]'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto'>
              <h3 className='text-white text-[36px] font-bold uppercase tracking-[-0.72px]'>MitosisDAO working group</h3>
              <button className='my-12'><Image src={btnApply} alt='btn apply' /></button>
              <div className='grid grid-cols-3 gap-3'>
                  <div className='py-8 px-5 border border-[#232226] bg-card-apply backdrop-blur-[10px]'>
                      <p className='rounded-lg w-fit font-medium text-xl text-white p-3 border-[2px] border-[#FF7120] bg-[rgba(255,255,255,0.03)] shadow-[0px_16px_20px_0px_rgba(0,0,0,0.50)]'>Deal Flow</p>
                      <p className='text-[rgba(255,255,255,0.70)] mt-6 text-sm font-normal'>The Deal Flow WG identifies and assesses replacement projects and assets that would be aligned with the MitosisDAOAO community objectives. Members of this WG recruit academic researchers while proposing, evaluating, and monitoring prospective projects for funding.</p>
                  </div>
                  <div className='py-8 px-5 border border-[#232226] bg-card-apply backdrop-blur-[10px]'>
                      <p className='rounded-lg w-fit font-medium text-xl text-white p-3 border-[2px] border-[#FF7120] bg-[rgba(255,255,255,0.03)] shadow-[0px_16px_20px_0px_rgba(0,0,0,0.50)]'>Operations</p>
                      <p className='text-[rgba(255,255,255,0.70)] mt-6 text-sm font-normal'>The Operations WG supports the planning, execution, and monitoring of MitosisDAOAO&apos;s ongoing activities. Members of the operations WG oversee milestone timelines, find efficiencies, and incentivize operationally relevant tasks.</p>
                  </div>
                  <div className='py-8 px-5 border border-[#232226] bg-card-apply backdrop-blur-[10px]'>
                      <p className='rounded-lg w-fit font-medium text-xl text-white p-3 border-[2px] border-[#FF7120] bg-[rgba(255,255,255,0.03)] shadow-[0px_16px_20px_0px_rgba(0,0,0,0.50)]'>Awareness</p>
                      <p className='text-[rgba(255,255,255,0.70)] mt-6 text-sm font-normal'>The Awareness WG focuses on elevating the profile of MitosisDAOAO through various mediums to ensure sustainable community growth. Members of the Awareness WG create strategies and content to exposMitosisDAOsDAO to new contributors and community members.</p>
                  </div>
              </div>
          </section>
      </main>
  )
}

export default WorkingGroup