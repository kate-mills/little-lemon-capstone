import Block from '../Block'
import Logo from './Logo'

import { websiteLinks } from '../../constants/links'
import styles from './index.module.css'

const Header = () => {
  return (
    <Block bgColor={'var(--clr-highlight-2)'}>
      <header className={styles.header}>
        <a href="/">
          <Logo />
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
