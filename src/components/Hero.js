import * as React from 'react'
import heroTitle from '../assets/hero-title.svg'
import heroImg from '../assets/hero-img.png'

import styles from '../assets/css/hero.module.css'

const Hero = () => {
  return (
    <article id={styles.hero}>
      <div className={styles.heroImgBoxText}>
        <img src={heroTitle} width="302" alt="Little Lemon, Chicago" />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a href="/" className="btn btn-reserve-a-table">
          Reserve a Table
        </a>
      </div>
      <div className={styles.heroImgBoxFood}>
        <img src={heroImg} alt="" />
      </div>
    </article>
  )
}
export default Hero
