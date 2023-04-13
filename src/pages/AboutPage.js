import Testimonials from '../components/Testimonials'
import Specials from '../components/WeeklySpecials'
import About from '../components/About'
import menu_items from '../constants/weekly-specials'

const AboutPage = () => {
  return (
    <>
      <About />
      <Specials menu_items={menu_items} />
      <Testimonials />
    </>
  )
}

export default AboutPage
