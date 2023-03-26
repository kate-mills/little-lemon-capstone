import Block from '../Block'
import logo from '../../assets/logo.svg'

import { websiteLinks } from '../../constants/links'
import styles from './index.module.css'


const Header = () => {
  return (
    <Block bgColor={'var(--white)'}>
      <header className={styles.header}>
        <a href="/">
          <img
            style={{ display: 'inline-block' }}
            src={logo}
            alt="Little Lemon Logo"
          />
        </a>
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
      </header>
    </Block>
  )
}

export default Header
