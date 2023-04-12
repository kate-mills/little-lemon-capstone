/* eslint-disable no-unused-vars */
import {
  FETCH_API,
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SETUP_BOOKING_BEGIN,
  SUBMIT_BOOKING_FORM,
  CLEAR_FORM,
  CLEAR_MESSAGE,
} from './actions'

import { convertTime } from '../../utils/military-to-standard-time'

const booking_reducer = (state, action) => {
  if (action.type === FETCH_API) {
    const { times } = action.payload
    return {
      ...state,
      initTimes: [...times],
      availableTimes: [...times],
    }
  }

  if (action.type === CLEAR_FORM) {
    return {
      ...state,
      formData: { resDate: '', resTime: '', guests: '', occasion: '' },
    }
  }
  if (action.type === UPDATE_RES_DATE) {
    const { resDate } = action.payload
    return {
      ...state,
      formData: { ...state.formData, resDate },
    }
  }

  if (action.type === UPDATE_RES_TIME) {
    const { resTime } = action.payload
    return {
      ...state,
      formData: { ...state.formData, resTime },
    }
  }

  if (action.type === UPDATE_GUESTS) {
    const { guests } = action.payload
    return {
      ...state,
      formData: { ...state.formData, guests },
    }
  }

  if (action.type === UPDATE_OCCASION) {
    const { occasion } = action.payload
    return {
      ...state,
      formData: { ...state.formData, occasion },
    }
  }

  if (action.type === SUBMIT_BOOKING_FORM) {
    const { data } = action.payload

    const { resTime, resDate, guests, occasion } = data 

    let { stdTime, valid } = convertTime(resTime)

    if (!valid) {
      return {
        ...state,
        loading: false,
        response: {
          type: 'error',
          msg: `Sorry, this time does not exist`,
        },
      }
    }

    let tableId = `g${guests}--${resDate}--${resTime}--o${occasion}`

    let updatedReservations = [...state.userReservations]
    let tableBooked = [...updatedReservations].find(
      formData => formData.tableId === tableId
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
        ...data,
        msg: `Your Booked on ${mo}-${dt}-${yr} at ${stdTime}`,
      },
      userReservations: [...updatedReservations],
      response: {
        type: 'success',
        msg: `Your Booked on ${resDate} at ${stdTime}`,
      },
    }
  }

  if (action.type === SETUP_BOOKING_BEGIN) {
    return { ...state, loading: true, }
  }


  if (action.type === CLEAR_MESSAGE) {
    return {
      ...state,
      response: {
        type: '',
        msg: '',
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
