/* eslint-disable no-unused-vars */
import {
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SUBMIT_FORM,
  CLEAR_MESSAGE,
  CLEAR_FORM,
} from './actions'

const booking_reducer = (state, action) => {
  if (action.type === CLEAR_FORM) {
    return {
      ...state,
      table: { resDate: '', resTime: '', guests: '', occasion: '' },
    }
  }

  if (action.type === UPDATE_RES_DATE) {
    const { resDate } = action.payload
    return {
      ...state,
      table: { ...state.table, resDate },
    }
  }

  if (action.type === UPDATE_RES_TIME) {
    const { resTime } = action.payload
    return {
      ...state,
      table: { ...state.table, resTime },
    }
  }

  if (action.type === UPDATE_GUESTS) {
    const { guests } = action.payload
    return {
      ...state,
      table: { ...state.table, guests },
    }
  }

  if (action.type === UPDATE_OCCASION) {
    const { occasion } = action.payload
    return {
      ...state,
      table: { ...state.table, occasion },
    }
  }

  if (action.type === SUBMIT_FORM) {
    const { data } = action.payload
    const { resTime, resDate, guests, occasion } = data

    const tempTime = state.availableTimes.find(avail => avail.time === resTime)
    const dateTaken = tempTime.dates.find(d => d === resDate)
    if (dateTaken) {
      return {
        ...state,
        response: {
          type: 'err',
          msg: `Sorry! this date/time isn't free.`,
        },
      }
    }



    else if (tempTime) {

      const tempAvailable = state.availableTimes.map(({ time, dates }) => {
        if (time === resTime) {
          return { time, dates: [...dates, resDate] }
        }
        return { time, dates }
      })


      let [yr, mo, date] = resDate.split('-')
      let success = {
        msg: `Your booked! ${mo}-${date} at ${resTime}!`,
        type: 'success',
      }

      return {
        ...state,
        availableTimes: tempAvailable,
        userReservations: [
          ...state.userReservations,
          { resDate, resTime, guests, occasion },
        ],
        response: success,
        table: { resDate: '', resTime: '', guests: '', occasion: '' },
      }
    }

    return { ...state }
  }

  if (action.type === CLEAR_MESSAGE) {
    console.log('CLEAR_MESSAGE action called')
    return {
      ...state,
      response: { type: '', msg: '' }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer


/*

const d = new Date()
console.log(d.getMonth()) //3

const [weekDay, mo, dt, yr, time] = (d.toString()).split(' ')

console.log(mo)
const e = new Date(`${mo} ${dt}, ${yr} ${time}`);

e.setDate(5);
console.log(e.getDate());
console.log()

e.setDate(32);

console.log(e.getDate());
console.log(e.getMonth())

*/
