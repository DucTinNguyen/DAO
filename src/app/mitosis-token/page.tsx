import BannerToken from '@/components/banner-token'
import Earn from '@/components/earn'
import Footer from '@/components/footer'
import DaoGovernance from '@/components/governance'
import React from 'react'

const MitosisToken = () => {
  return (
      <main className='bg-[#0A090E] font-roBoTo'>
      <BannerToken />
      <DaoGovernance />
      <Earn />
      <Footer />
      </main>
  )
}

export default MitosisToken