import Nav from './Nav'
import Block from './Block'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <Block bgColor={'var(--white)'}>
      <header>
        <img
          style={{ display: 'inline-block' }}
          src={logo}
          alt="Little Lemon Logo"
          width="148"
        />
        <Nav style={{ display: 'inline-block' }} />
      </header>
    </Block>
  )
}

export default Header
