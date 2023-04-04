import Testimonials from '../components/Testimonials'
import Specials from '../components/WeeklySpecials'
import About from '../components/About'

import menu_items from '../constants/menu-items'

const MenuPage = () => {
  return (
    <>
      <Specials showMenu menu_items={menu_items}/>
      <About/>
      <Testimonials/>
    </>
  )
}

export default MenuPage
