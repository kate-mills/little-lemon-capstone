import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import { initDateTimes } from '../../utils/get-reservation-dates'

import { FETCH_API, SUBMIT_FORM, RESET_FORM } from './actions'

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
  isLoading: false,
  lastTableBooked: getLastBooked(),
  response: { type: '', msg: '' },
  formData: { resDate: initDateTimes.start.iso, resTime: '', guests: '', occasion: '' },
  userReservations: getUserReservations(),
  availableTimes: [...initDateTimes.initTimes],
  initDateTimes: {...initDateTimes},
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchTimesWithDate = bookingDate => {
    dispatch({ type: FETCH_API, payload: { resDate: bookingDate } })
  }

  const submitForm = (formData = {}) => {
    dispatch({ type: SUBMIT_FORM, payload: { values: formData } })
  }

  const resetBookingForm = () => {
    dispatch({ type: RESET_FORM })
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

  return (
    <BookingContext.Provider
      value={{
        ...state,
        fetchTimesWithDate,
        resetBookingForm,
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
