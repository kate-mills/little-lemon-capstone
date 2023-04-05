import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

import {
  availableTimes,
  startDate,
  endDate,
} from '../../constants/available-reservation-times'

import {
  UPDATE_RESERVATION_TIMES,
} from './actions'

const initialState = {
  availableTimes,
  startDate,
  endDate,
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateTimes = (data = {}) => {
    dispatch({ type: UPDATE_RESERVATION_TIMES, payload: { data } })
  }

  return (
    <BookingContext.Provider
      value={{
        ...state,
        updateTimes,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
