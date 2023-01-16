import * as React from 'react'

import logo from '../assets/logo.svg'

import { websiteLinks } from '../constants/links'

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        {websiteLinks.map(({ title, href }) => {
          return (
            <li key={title}>
              <a href={href}>{title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
