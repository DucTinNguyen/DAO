import BannerContributor from '@/components/banner-contributor'
import Contributors from '@/components/contributor'
import Footer from '@/components/footer'
import WorkingGroup from '@/components/working-group'
import React from 'react'

const Contributor = () => {
  return (
    <main className='bg-[#0A090E] font-roBoTo'>
      <BannerContributor />
      <WorkingGroup />
      <Contributors />
      <Footer />
    </main>
  )
}

export default Contributor