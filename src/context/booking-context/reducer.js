import {
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SUBMIT_FORM,
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
    return { ...state, table: { ...state.table, resDate } }
  }

  if (action.type === UPDATE_RES_TIME) {
    const { resTime } = action.payload
    return { ...state, table: { ...state.table, resTime } }
  }

  if (action.type === UPDATE_GUESTS) {
    const { guests } = action.payload
    return { ...state, table: { ...state.table, guests } }
  }

  if (action.type === UPDATE_OCCASION) {
    const { occasion } = action.payload
    return { ...state, table: { ...state.table, occasion } }
  }

  if (action.type === SUBMIT_FORM) {
    const { data } = action.payload
    const { resTime, resDate, guests, occasion } = data

    const tempTime = state.availableTimes.find(avail => avail.time === resTime)
    const dateFailed = tempTime.dates.find(d => d === resDate)

    if(dateFailed){
      return{
        ...state,
          message: `Sorry!  ${resDate} at ${resTime} is no longer available.`,
      }
    }

    else if (tempTime) {
      const tempAvailable = state.availableTimes.map(({ time, dates }) => {
        if (time === resTime) {
            return { time, dates: [...dates, resDate] }
        }
        return {time, dates}
      })

      let message = `Success! Your table has been booked for ${resDate} at ${resTime} - party of ${guests} - ${occasion}.`

      return { ...state,
        availableTimes: tempAvailable,
        userReservations: [
          ...state.userReservations,
          { resDate, resTime, guests, occasion },
        ],
        message,
        table: { resDate: '', resTime: '', guests: '', occasion: '' },
      }
    }

    return { ...state }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
