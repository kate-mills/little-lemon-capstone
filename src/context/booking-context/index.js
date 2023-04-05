import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import {
  availableTimes,
  startDate,
  endDate,
} from '../../constants/available-reservation-times'

import {
  CLEAR_FORM,
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SUBMIT_FORM,
} from './actions'

import { checkWindow } from '../../utils/isBrowser'

const getLocalUserReservations = () => {
  if (checkWindow()) {
    let userReservations = localStorage.getItem('ll-user-reservations')
    if (userReservations) {
      return JSON.parse(localStorage.getItem('ll-user-reservations'))
    } else {
      return []
    }
  }
  return []
}

const initialState = {
  loading: false,
  response: {type: ''},
  message: '',
  table: {resDate: '', resTime: '', guests: '', occasion: ''},
  userReservations: getLocalUserReservations(),
  availableTimes,
  startDate,
  endDate,
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateTimes = (data = {}) => {
    dispatch({ type: SUBMIT_FORM, payload: { data } })
  }
  const updateResDate = resDate => {
    dispatch({ type: UPDATE_RES_DATE, payload: { resDate } })
  }
  const updateResTime = resTime => {
    dispatch({ type: UPDATE_RES_TIME, payload: { resTime } })
  }
  const updateGuests = guests => {
    dispatch({ type: UPDATE_GUESTS, payload: { guests } })
  }
  const updateOccasion = occasion => {
    dispatch({ type: UPDATE_OCCASION, payload: { occasion } })
  }
  const clearBookingForm = () => {
    dispatch({ type: CLEAR_FORM })
  }
  useEffect(() => {
    localStorage.setItem('ll-user-reservations', JSON.stringify(state.userReservations))
  }, [state.userReservations])



  return (
    <BookingContext.Provider
      value={{
        ...state,
          updateResDate,
          updateResTime,
          updateGuests,
          updateOccasion,
          updateTimes,
          clearBookingForm,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
