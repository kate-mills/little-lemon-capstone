import * as React from 'react'
import heroTitle from '../assets/hero-title.svg'
import heroImg from '../assets/hero-img.png'
import ButtonLink from './ButtonLink'

import styles from '../assets/css/hero.module.css'

const Hero = () => {
  return (

    <article id={styles.hero}>
      <div className={styles.heroTextWrapper}>
        <img src={heroTitle} width="302" alt="Little Lemon, Chicago" />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

    <ButtonLink text='Reserve a Table' href="/" />
      </div>
      <div className={styles.heroImg}>
        <img src={heroImg} alt="" />
      </div>
    </article>
  )
}
export default Hero
