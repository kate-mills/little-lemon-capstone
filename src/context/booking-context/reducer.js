import {
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  UPDATE_RESERVATION_TIMES,
} from './actions'

const booking_reducer = (state, action) => {

  if (action.type === UPDATE_RES_DATE) {
    const {resDate} = action.payload
    return { ...state, table: {...state.table, resDate} }
  }

  if (action.type === UPDATE_RES_TIME) {
    const {resTime} = action.payload
    return { ...state, table: {...state.table, resTime} }
  }

  if (action.type === UPDATE_GUESTS) {
    const {guests} = action.payload
    return { ...state, table: {...state.table, guests} }
  }

  if (action.type === UPDATE_OCCASION) {
    const {occasion} = action.payload
    return { ...state, table: {...state.table, occasion} }
  }

  if (action.type === UPDATE_RESERVATION_TIMES) {
    const { data } = action.payload
    const { resTime, resDate, guests, occasion } = data

    const tempTime = state.availableTimes.find(avail => avail.time === resTime)
    if (tempTime) {
      const tempList = state.availableTimes.map(({ time, dates }) => {
        if (time === resTime) {
          let tempDates =
            dates.length > 0 ? [...dates, { ...data }] : [{ ...data }]
          return { time, dates: [...tempDates] }
        }
        return { time, dates }
      })

      return {
        ...state,
        availableTimes: tempList,
        userReservations: [
          ...state.userReservations,
          { resDate, resTime, guests, occasion }
        ]
      }
    }

    return { ...state }
  }



  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
