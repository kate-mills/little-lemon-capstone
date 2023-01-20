import * as React from 'react'
import { websiteLinks, socialLinks } from '../constants/links'

import logo from '../assets/footer-logo.svg'

const Footer = () => {
  return (
    <footer>
      <section className="img-container">
        <img src={logo} alt="Little Lemon Footer Logo" />
      </section>

      <section>
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
      </section>
      <section>
        <h5>Contact</h5>
        <address>
          <span>555 3rd Street</span>
          <span>San Francisco, CA</span>
    </address>

    <address>
          <a href="mailto:@example.com">contact@littlelemon.com</a>
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
      </section>
      <section>
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
      </section>
    </footer>
  )
}

export default Footer
