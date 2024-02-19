import React from 'react'
import Banner from '../src/components/layout/Banner'
import ProductCategoris from '../src/components/ProductCategoris'
import FeaturedCategori from '../src/components/layout/FeaturedCategori'

function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedCategori/>
    </div>
  )
}

export default Home