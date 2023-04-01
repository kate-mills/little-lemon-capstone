import Hero from '../components/HeroSection'
import Specials from '../components/WeeklySpecials'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

import menu_items from '../constants/weekly-specials'

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
