import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

import menu_items from '../constants/this_week_specials'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Specials menu_items={menu_items}/>
      <Testimonials />
      <About />
    </>
  )
}

export default HomePage
