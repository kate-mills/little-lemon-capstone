import React from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
import BlockBg from '../components/BlockBg'

const HomePage = () => {
  return (
    <>
      <BlockBg bgColor="var(--clr-primary-1)">
        <Hero />
      </BlockBg>

      <BlockBg bgColor="var(--clr-highlight-2)">
        <Specials />
      </BlockBg>

      <BlockBg bgColor="#f8f2ec" style={{}}>
        <Testimonials />
      </BlockBg>
    </>
  )
}

export default HomePage
