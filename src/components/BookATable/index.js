import Block from '../Block'
import styles from './index.module.css'
import { useBookingContext } from '../../context/booking-context'

const BookATable = () => {
  const {
    message,
    table:{resDate, resTime, guests, occasion},
    updateResDate,
    updateResTime,
    updateGuests,
    updateOccasion,
    availableTimes,
    endDate, startDate,
    updateTimes,
  } = useBookingContext()

  const handleSubmit = e => {
    e.preventDefault()
    updateTimes({ resDate, resTime, guests, occasion })
  }

  const handleDateChange = e => {
    let d = e.target.value
    updateResDate(d)
  }
  const handleTimeChange = e => {
    let t = e.target.value
    updateResTime(t)
  }
  const handleGuestsChange = e => {
    let num = e.target.value
    updateGuests(num)
  }
  const handleOccasionChange = e => {
    let o = e.target.value
    updateOccasion(o)
  }

  return (
    <Block bgColor={'var(--almost-black)'}>
      <article className={styles.book_a_table}>
        <section>
          <h2>Book A Table</h2>
          <p className={styles.booking_message}>{message}</p>
        </section>
        <section>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="resDate" className="bold-title">
                Reservation Date
              </label>
              <input
                className={styles.input}
                id="resDate"
                name="resDate"
                type="date"
                value={resDate}
                onChange={handleDateChange}
                min={startDate}
                max={endDate}
                required
              />
            </div>

            <div className={styles.styleSelect}>
              <label htmlFor="resTime" className="bold-title">
                Reservation Time
              </label>
              <select
                className={`${styles.input}`}
                id="resTime"
                name="resTime"
                value={resTime}
                onChange={handleTimeChange}
                required
              >
                <option disabled hidden value="">
                  Select a time
                </option>
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
              <label htmlFor="guests" className="bold-title">
                Number of guests
              </label>
              <span className={styles.number_wrapper}>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  placeholder="1 - 10"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={handleGuestsChange}
                  required
                  className={styles.input}
                />
              </span>
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
                onChange={handleOccasionChange}
                required
              >
                <option disabled hidden value="">
                  Select Occasion
                </option>
                <option value="none">No Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
              </select>
            </div>
            <div><input type="submit" value="Book Table" /></div>
          </form>
        </section>
      </article>
    </Block>
  )
}

export default BookATable
