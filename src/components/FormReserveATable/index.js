import { useState } from 'react'
import Block from '../Block'
import styles from './index.module.css'
import {
  availResTimes,
  startDate,
  endDate,
} from '../../constants/available-reservation-times'

const FormReserveATable = () => {
  const [availableTimes, setAvailableTimes] = useState(availResTimes)

  const [resDate, setResDate] = useState('')
  const [resTime, setResTime] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')
  

  const updateAvailableTimes = ()=>{
    let foundTime = resTime && availableTimes.filter(({time, dates}) =>{
      return time === resTime
    })

    if(foundTime){
      console.log('found it', foundTime)
        let safe = foundTime?.dates?.filter(d => d === resDate)

      let tempAvailableTimes = !!safe &&  foundTime?.dates?.map((d) => {

        console.log(d)
        return d
      })
      setAvailableTimes({...tempAvailableTimes})
    }

    console.log(availableTimes)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    updateAvailableTimes()

  }

  return (
    <Block>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input
          id="resDate"
          name="resDate"
          type="date"
          value={resDate}
          onChange={e => setResDate(e.target.value)}
          min={startDate}
          max={endDate}
          required
        />

        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime"
          name="resTime"
          value={resTime}
          onChange={e => {
            setResTime(e.target.value)
          }}
          required
        >
          <option value="">Times Available</option>
          {availableTimes.map(tm => {
            return <option key={tm.time} value={tm.time}>{tm.time}</option>
          })}
        </select>

        <label htmlFor="guests">Number of guests</label>
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
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion" 
          name="occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option value="">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
        </select>

        <input type="submit" value="Make Your reservation"/>
      </form>
    </Block>
  )
}

export default FormReserveATable
