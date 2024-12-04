import React from 'react'
import { TitleDoubleWrap } from '../title'


const phases = [
    'Project proposals start as drafts in Website. Verified token holders collaborate to refine ideas through community discussion before formal submission.',
    'Proposals follow a standardized template for formal review. A 4-day temperature check by verified token holders determines advancement to final voting.',
    'Passing temperature check moves proposals to Snapshot voting. Batches processed every 14 days, with 7-day voting period for token holders.'
]

const DaoGovernance = () => {
  return (
    <main className='w-full h-full py-[40px] border-b-[1px] border-[#232226]'>
        <section className='w-full h-full lg:max-w-[1200px] mx-auto px-4 lg:px-0'>
            <TitleDoubleWrap title='DAO' subTitle='Governance' titleStyle='text-[32px] font-semibold' subStyle='text-[32px] font-semibold' className='w-[250px] lg:w-[260px]' />
              <div className='grid grid-cols-1 md:grid-cols-3 mt-20'>
                  {phases.map((item, index) => {
                      return <div key={index}>
                          <p className='py-4 px-6 w-fit text-[#FF7120] text-2xl font-semibold font-reiswar border border-[#232226]'>Phase {index + 1}</p>
                          <p className='py-6 px-4 border border-[#232226] text-white text-base font-medium'>{item}</p>
                      </div>
                  })}
              </div>  
        </section>   
    </main>
  )
}

export default DaoGovernance