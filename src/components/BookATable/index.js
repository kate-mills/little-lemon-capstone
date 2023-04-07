import Block from '../Block'
import styles from './index.module.css'
import { useBookingContext } from '../../context/booking-context'
import LittleLemonChicago from '../LittleLemonChicago'

import bookingImage from '../../assets/book.png'
const BookATable = () => {
  const {
    response: { type, msg },
    table: { resDate, resTime, guests, occasion },
    updateResDate,
    updateResTime,
    updateGuests,
    updateOccasion,
    availableTimes,
    endDate,
    startDate,
    updateTimes,
  } = useBookingContext()

  const handleSubmit = e => {
    e.preventDefault()
    updateTimes({ resDate, resTime, guests, occasion })
  }

  return (
    <Block bgColor={'var(--clr-primary-1)'}>
      <article className={styles.book_a_table}>
    <div  className={styles.heading}>
    <LittleLemonChicago className={styles.img} color1="var(--clr-primary-2)"/>
    <div className={styles.img}>
      <img src={bookingImage}alt=""/>
    </div>
    </div>
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
    <h3>Book A Table</h3>
            <div>
              <label data-required htmlFor="resDate" className="bold-title">
                Select Date
              </label>
              <input
                id="resDate"
                name="resDate"
                type="date"
                value={resDate}
                onChange={updateResDate}
                min={startDate}
                max={endDate}
                required
              />
            </div>

            <div className={styles.styleSelect}>
              <label data-required htmlFor="resTime" className="bold-title">
                Select Time
              </label>
              <select
                id="resTime"
                name="resTime"
                value={resTime}
                onChange={updateResTime}
                required
              >
                <option disabled hidden value=""></option>
                {availableTimes?.map(({ time, dates }) => {
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  )
                })}
              </select>
            </div>

            <div>
              <label data-required htmlFor="guests" className="bold-title">
                Number of guests
              </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={updateGuests}
                  required
                />
            </div>
            <div className={styles.styleSelect}>
              <label htmlFor="occasion" className="bold-title">
                <div className={styles.occasion} />
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={updateOccasion}
              >
                <option disabled hidden value=""></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="None">No Occasion</option>
              </select>
            </div>
            <div>

          <p className={`${styles.message} ${styles[type]}`}> {msg} </p>
              <input type="submit" value="Book Table" />
            </div>
          </form>
    </>
      </article>
    </Block>
  )
}

export default BookATable
