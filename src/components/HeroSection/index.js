import Block from '../Block'
import ButtonLink from '../ButtonLink'
import LittleLemonChicago from '../LittleLemonChicago'
import hero from '../../assets/hero.png'

import styles from './index.module.css'

const Hero = ({bgColor='var(--clr-primary-1)'}) => {
  return (
    <Block bgColor={bgColor}>
      <article id={styles.hero}>
        <div className={styles.heroTextWrapper}>
          <LittleLemonChicago
            color1="var(--clr-primary-2)"
            color2="var(--clr-highlight)"
          />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <ButtonLink text="Reserve a Table" to="/reserve-a-table" />
        </div>
        <div className={styles.heroImg}>
          <img src={hero} alt="Server holding platter of food" />
        </div>
      </article>
    </Block>
  )
}
export default Hero
