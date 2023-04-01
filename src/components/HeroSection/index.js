import Block from '../Block'
import ButtonLink from '../ButtonLink'
import LittleLemonChicago from '../LittleLemonChicago'

import HeroImg from './HeroImg'
import styles from './index.module.css'

const Hero = () => {
  return (
    <Block bgColor="var(--clr-primary-1)">
      <article id={styles.hero}>
        <div className={styles.heroTextWrapper}>
          <LittleLemonChicago color1="var(--clr-primary-2)" color2="var(--clr-highlight-2)" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <ButtonLink text="Reserve a Table" href="/" />
        </div>
        <div className={styles.heroImg}>
          <HeroImg />
        </div>
      </article>
    </Block>
  )
}
export default Hero
