import { useState } from 'react'
import Block from '../Block'
import styles from './index.module.css'
import {
  availResTimes,
  startDate,
  endDate,
} from '../../constants/available-reservation-times'

const BookATable = () => {

  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')

  const updateAvailableTimes = (resDate) => {
    let foundTime = resTime && availResTimes.filter(({ time, dates }) => {
        return time === resTime
      })
   
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
    let reservation = {resDate, resTime, guests, occasion}
    updateAvailableTimes(reservation)
  }

  return (
    <Block>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resDate" className="bold-title">Choose date</label>
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
          />
        </div>

        <div>
          <label htmlFor="resTime" className="bold-title">Choose time</label>
          <select

            className={styles.input}
            id="resTime"
            name="resTime"
            value={resTime}
            onChange={e => {
              setResTime(e.target.value)
            }}
            required
          >
            <option value="">Times Available</option>
            {availResTimes.map(tm => {
              return (
                <option key={tm.time} value={tm.time}>
                  {tm.time}
                </option>
              )
            })}
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="bold-title">Number of guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            value={guests}
            onChange={e => setGuests(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="occasion" className="bold-title" >Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
            className={styles.input}
          >
            <option value="">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Make Your reservation" />
        </div>
      </form>
    </Block>
  )
}

export default BookATable
