import * as React from 'react'

import Nav from './Nav'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <img style={{display: 'inline-block'}}src={logo} alt="Little Lemon Logo" width="148"/>
      <Nav style={{display: 'inline-block'}}/>
    </header>
  )
}

export default Header
