import * as React from 'react'

import { websiteLinks } from '../constants/links'

const Nav = () => {
  return (
    <nav>
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
