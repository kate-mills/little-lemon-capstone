import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import {
  availableTimes,
} from '../../constants/available-reservation-times'
import {startDate, endDate, availableReservations} from '../../utils/get-reservation-dates'

import {
  CLEAR_FORM,
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SUBMIT_FORM,
  CLEAR_MESSAGE,
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
  response: { type:'', msg: '' },
  table: { resDate: '', resTime: '', guests: '', occasion: '' },
  userReservations: getLocalUserReservations(),
  availableTimes,
  startDate,
  endDate,
  availableReservations,
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateTimes = (data = {}) => {
    dispatch({ type: SUBMIT_FORM, payload: { data } })
  }
  const updateResDate = e => {
    dispatch({ type: UPDATE_RES_DATE, payload: { resDate: e.target.value } })
  }
  const updateResTime = e => {
    dispatch({ type: UPDATE_RES_TIME, payload: { resTime: e.target.value } })
  }
  const updateGuests = e => {
    dispatch({ type: UPDATE_GUESTS, payload: { guests: e.target.value } })
  }
  const updateOccasion = e => {
    dispatch({ type: UPDATE_OCCASION, payload: { occasion: e.target.value } })
  }
  const clearBookingForm = () => {
    dispatch({ type: CLEAR_FORM })
  }
  const clearResultMessage = () => {
    dispatch({ type: CLEAR_MESSAGE })
  }

  useEffect(() => {
    localStorage.setItem(
      'll-user-reservations',
      JSON.stringify(state.userReservations)
    )
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
          clearResultMessage,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
