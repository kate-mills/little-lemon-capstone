import Block from '../Block'
import styles from './index.module.css'
import { useBookingContext } from '../../context/book-a-table'
import LittleLemonChicago from '../LittleLemonChicago'

import imgSrc from '../../assets/book.png'
import BookingsForm from './Form'

const BookATable = () => {
  const {
    response: { type, msg },
  } = useBookingContext()

  return (
    <Block bgColor={'var(--clr-primary-1)'}>
      <article data-testid="book-a-table" className={styles.bookings}>

        <div className={styles.bookings_box}>
          <LittleLemonChicago
            className={styles.img}
            color1="var(--clr-primary-2)"
          />
          <div className={styles.img}>
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className={styles.bookings_box}>
        <p className={`${styles.msg} ${styles[type]}`}>{msg}</p>
          <h3>Book A Table</h3>
          <BookingsForm />
        </div>
      </article>
    </Block>
  )
}

export default BookATable
