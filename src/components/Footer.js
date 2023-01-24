import * as React from 'react'
import { websiteLinks, socialLinks } from '../constants/links'

import logo from '../assets/logo-footer.svg'

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <img
          src={logo}
          alt="Little Lemon Footer Logo"
          width="162"
          height="279"
        />
      </div>
      <div>
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
      </div>
      <div>
        <h5>Contact Us</h5>
        <address>
          <span>555 3rd Street</span>
          <span>San Francisco, CA</span>
          <a href="mailto:@example.com">contact@littlelemon.com</a>
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
      </div>
      <div>
        <h5>Social Media</h5>
        <nav>
          <ul>
            {socialLinks.map(({ title, href }) => {
              return (
                <li key={title}>
                  <a href={href}>@{title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
