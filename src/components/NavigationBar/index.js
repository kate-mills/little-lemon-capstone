import Block from '../Block'
import Logo from './Logo'
import { Link } from 'react-router-dom'

import { websiteLinks } from '../../constants/links'
import styles from './index.module.css'

const NavigationBar = () => {
  return (
    <Block bgColor={'var(--clr-highlight)'}>
      <header className={styles.header}>
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            {websiteLinks.map(({ title, href }) => {
              return (
                <li key={title}>
                  <Link to={href}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </Block>
  )
}

export default NavigationBar
