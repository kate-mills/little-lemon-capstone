import heroImg from '../assets/hero-img.png'
import ButtonLink from './ButtonLink'
import HeroTitle from './HeroTitle'

import Block from '../components/Block'
import styles from '../assets/css/hero.module.css'

const Hero = () => {
  return (
    <Block bgColor="var(--clr-primary-1)">
      <article id={styles.hero}>
        <div className={styles.heroTextWrapper}>
          <HeroTitle
            color1="var(--clr-primary-2)"
            color2="var(--clr-highlight-2)"
          />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <ButtonLink text="Reserve a Table" href="/" />
        </div>
        <div className={styles.heroImg}>
          <img src={heroImg} alt="" />
        </div>
      </article>
    </Block>
  )
}
export default Hero
