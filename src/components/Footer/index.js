import logo from '../../assets/ImgLogoFooter.png'
import Block from '../Block'
import styles from './index.module.css'

import { websiteLinks, socialLinks } from '../../constants/links'

const Footer = () => {
  return (
    <Block bgColor={'var(--gray)'}>
      <footer id={styles.footer}>
        <div className={styles.footer_img_box}>
          <img
            src={logo}
            alt="Little Lemon Footer Logo"
            width="125"
            height="292"
          />
        </div>
        <div className={styles.footer_nav_box}>
          <h5>Navigation</h5>
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
        <div className={styles.footer_nav_box}>
          <h5>Contact Us</h5>
          <address className={styles.footer_address}>
            <span>555 3rd Street</span>
            <span>San Francisco, CA</span>
            <a href="mailto:@example.com">info@littlelemon.com</a>
            <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
        </div>
        <div className={styles.footer_nav_box}>
          <h5>Social Media</h5>
          <nav>
            <ul>
              {socialLinks.map(({ title, href }) => {
                return (
                  <li key={title}>
                    <a href={href}>{title}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </footer>
    </Block>
  )
}

export default Footer
