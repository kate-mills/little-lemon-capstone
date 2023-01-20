import * as React from 'react'

import Nav from './Nav'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  )
}

export default Header
