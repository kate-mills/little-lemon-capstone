import React from 'react'
import Hero from '../components/Hero'
//import Specials from '../components/Specials'
//import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <div
        style={{ backgroundColor: 'var(--clr-primary-1)' }}
        className="block-bg"
      >
        <div className="block">
          <Hero />
        </div>
      </div>
      <div
        style={{ backgroundColor: 'var(--clr-highlight-2)' }}
        className="block-bg"
      >
        <div className="block">
    {/*<Specials />*/}
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--gray)' }} className="block-bg">
        <div className="block">
    {/*<Testimonials />*/}
        </div>
      </div>
    </>
  )
}

export default HomePage
