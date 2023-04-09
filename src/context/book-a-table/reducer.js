/* eslint-disable no-unused-vars */
import {
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  CLEAR_MESSAGE,
  CLEAR_FORM,
  FETCH_API,
  SUBMIT_API,
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

  if (action.type === SUBMIT_API) {
    const { data } = action.payload

    const { resTime, resDate, guests, occasion } = data

    let {stdTime, valid} = convertTime(resTime)
    
    if(!valid){
      return {
        ...state,
        response:{
          type: 'error',
          msg: `Sorry, this time does not exist`
        }
      }
    }
    return {
      ...state,
      response: {
        type: 'success',
        msg: `Your Booked on ${resDate} at ${stdTime}`,
      },
    }
  }

  if (action.type === CLEAR_MESSAGE) {
    console.log('CLEAR_MESSAGE action called')
    return {
      ...state,
      response: { type: '', msg: '' },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
