import { useBookingContext } from '../../context/book-a-table'

import styles from './BookingsForm.module.css'
const BookingForm = (props) => {
  const {
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

  const isDisabled = !resDate || !resTime || !Number(guests) || (Number(guests) >10)

  const handleSubmit = e => {
    e.preventDefault()
    updateTimes({ resDate, resTime, guests, occasion })
  }

  return (
    <form id='bookings' className={styles.form} onSubmit={handleSubmit}>

      {/* Booking Date */}
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

      {/* Booking Time */}
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


      {/* Number Of  Guests */}
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

      {/* Booking Occasion */}
        <label htmlFor="occasion" className="bold-title">
          <div className={styles.occasion} /> Occasion
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


      {/* Submit Form*/}
      <div>
        <input type="submit" value={'Book Table'} disabled={isDisabled}/>
      </div>
    </form>
  )
}

export default BookingForm
