/* eslint-disable no-unused-vars */
import { FETCH_API, SUBMIT_FORM, RESET_FORM } from './actions'

import { fetchAPI } from '../../api'

import { convertTime } from '../../utils/military-to-standard-time'

const booking_reducer = (state, action) => {
  if (action.type === FETCH_API) {
    const { resDate } = action.payload
    let availableTimes = fetchAPI(new Date(resDate))
    return {
      ...state,
      formData: { ...state.formData, resDate },
      availableTimes,
    }
  }

  if (action.type === RESET_FORM) {
    return {
      ...state,
      formData: {
        resDate: state.initDateTimes.start.iso,
        resTime: '',
        guests: '',
        occasion: '',
      },
      response: { type: '', msg: '' },
      availableTimes: [...state.initDateTimes.initTimes],
    }
  }

  if (action.type === SUBMIT_FORM) {
    const { values } = action.payload

    const { resTime, resDate, guests, occasion } = values

    let { stdTime, valid } = convertTime(resTime)

    if (!valid) {
      console.log('NOT VALID')
      return {
        ...state,
        isLoading: false,
        response: {
          type: 'error',
          msg: `Sorry, this time does not exist`,
        },
      }
    }

    let tableId = `g${guests}--${resDate}--${resTime}--o${occasion}`

    let updatedReservations = [...state.userReservations]
    let tableBooked = [...updatedReservations].find(
      booking => booking.tableId === tableId
    )
    let [yr, mo, dt] = resDate.split('-')

    if (!tableBooked) {
      updatedReservations = [
        { tableId, stdTime, resTime, resDate, guests, occasion },
        ...updatedReservations,
      ]
    }

    return {
      ...state,
      lastTableBooked: {
        ...values,
        msg: `Your Booked on ${mo}-${dt}-${yr} at ${stdTime}`,
      },
      userReservations: [...updatedReservations],
      response: {
        type: 'success',
        msg: `Your Booked on ${resDate} at ${stdTime}`,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
