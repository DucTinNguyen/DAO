import React from 'react'
import { TitleDoubleWrap } from '../title'


const phases = [
    'Proposals begin as rough drafts on Discord. Ideas are discussed and debated by DAO members, expanding on the draft. Any verified MITOSIS token holders can create a draft proposal.',
    'Proposals begin as rough drafts on Discord. Ideas are discussed and debated by DAO members, expanding on the draft. Any verified MITOSIS token holders can create a draft proposal.',
    'Proposals are automatically posted on Snapshot if they pass the Phase II temperature check. This happens in batches every 14 days. Token holders are then allowed to vote on proposals for a total of 7 days.'
]

const DaoGovernance = () => {
  return (
    <main className='w-full h-full py-[40px] border-b-[1px] border-[#232226]'>
        <section className='w-full h-full lg:max-w-[1200px] mx-auto'>
            <TitleDoubleWrap title='DAO' subTitle='Governance' titleStyle='text-[32px] font-semibold' subStyle='text-[32px] font-semibold' className='w-[260px]' />
              <div className='flex mt-20'>
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