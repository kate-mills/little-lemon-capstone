import Block from '../Block'

import styles from './index.module.css'
import LittleLemonChicago from '../LittleLemonChicago'
import { useBookingContext } from '../../context/book-a-table'

const BookATableConfirmation = props => {
  const { lastTableBooked } = useBookingContext()
  return (
    <Block bgColor={'var(--clr-primary-1)'}>
      <article data-testid="book-a-table" className={styles.bookings}>
        <div className={styles.bookings_box}>
          <LittleLemonChicago
            className={styles.img}
            color1="var(--clr-highlight)"
          />
        </div>
        <div>
          {<h3>Your Table Is Booked</h3>}
          <p className={`${styles.msg}`}>{lastTableBooked?.msg}</p>
        </div>
      </article>
    </Block>
  )
}

export default BookATableConfirmation
