import { useState } from 'react'
import Block from '../Block'
import styles from './index.module.css'
import {useBookingContext} from '../../context/booking-context'

const BookATable = () => {
  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')
  const [guests, setGuests] = useState('4')
  const [occasion, setOccasion] = useState('')

  const {availableTimes, endDate, startDate, updateTimes} = useBookingContext()

  const handleSubmit = e => {
    e.preventDefault()
    updateTimes({resDate, resTime, guests, occasion})
  }

  return (
    <Block bgColor={'var(--almost-black)'}>
      <article className={styles.book_a_table}>
        <section>
          <h2>Book A Table</h2>
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
                onChange={e => setResDate(e.target.value)}
                min={startDate}
                max={endDate}
                required
                placeholder="Choose Date"
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
                onChange={e => {
                  setResTime(e.target.value)
                }}
                required
              >
                <option value="">Choose Time</option>
                {availableTimes?.map(({time, dates}) => {
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
                  placeholder="4"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  required
                  className={styles.input}
                />
              </span>
            </div>
            <div className={styles.styleSelect}>
              <label htmlFor="occasion" className="bold-title">
                <div className={styles.occasion} />Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
                className={`${styles.input}`}
              >
                <option value="No Occasion" className={styles.option}>
                  Occasion
                </option>
                <option value="birthday" className={styles.option}>
                  Birthday
                </option>
                <option value="anniversary" className={styles.option}>
                  Anniversary
                </option>
                <option value="engagement" className={styles.option}>
                  Engagement
                </option>
              </select>
            </div>

            <div>
              <input type="submit" value="Book Your Table" />
            </div>
          </form>
        </section>
      </article>
    </Block>
  )
}

export default BookATable
