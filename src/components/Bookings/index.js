import * as React from 'react'
import Block from '../Block'
import styles from './index.module.css'
import LittleLemonChicago from '../LittleLemonChicago'

import imgSrc from '../../assets/book.png'
import BookingsForm from './Form'

const BookATable = () => {
  return (
    <Block bgColor={'var(--clr-primary-1)'}>
      <article data-testid="book-a-table" className={styles.bookings}>
        <div className={styles.bookings_box}>
          <LittleLemonChicago
            className={styles.img}
            color1="var(--clr-highlight)"
          />
          <div className={styles.img}>
            <img src={imgSrc} alt="Chef making a salad" />
          </div>
        </div>
        <div className={styles.bookings_box}>
          <h2>Book A Table</h2>
          <BookingsForm />
        </div>
      </article>
    </Block>
  )
}

export default BookATable
