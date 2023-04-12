import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import { fetchAPI } from '../../api'
import { startDate, endDate } from '../../utils/get-reservation-dates'

import {
  FETCH_API,
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  SUBMIT_BOOKING_FORM,
  SETUP_BOOKING_BEGIN,
  CLEAR_FORM,
  CLEAR_MESSAGE,
} from './actions'

import { checkWindow } from '../../utils/isBrowser'

const getUserReservations = () => {
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

const getLastBooked = () => {
  if (checkWindow()) {
    let lastTableBooked = localStorage.getItem('ll-last-booked')
    if (lastTableBooked) {
      return JSON.parse(localStorage.getItem('ll-last-booked'))
    } else {
      return []
    }
  }
  return []
}

const initialState = {
  loading: false,
  lastTableBooked: getLastBooked(),
  response: { type: '', msg: '' },
  formData: { resDate: startDate, resTime: '', guests: '', occasion: '' },
  userReservations: getUserReservations(),
  availableTimes: [],
  startDate,
  endDate,
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
  const submitForm = async (formData = {}) => {
    dispatch({ type: SETUP_BOOKING_BEGIN })
    dispatch({ type: SUBMIT_BOOKING_FORM, payload: { data: formData } })
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

  useEffect(() => {
    localStorage.setItem(
      'll-last-booked',
      JSON.stringify(state.lastTableBooked)
    )
  }, [state.lastTableBooked])

  useEffect(() => {
    let apiTimes = fetchAPI(new Date(state.formData.resDate))
    dispatch({ type: FETCH_API, payload: { times: [...apiTimes] } })
  }, [state.formData.resDate])

  return (
    <BookingContext.Provider
      value={{
        ...state,
        updateResDate,
        updateResTime,
        updateGuests,
        updateOccasion,
        clearBookingForm,
        clearResultMessage,
        getUserReservations,
        submitForm,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
