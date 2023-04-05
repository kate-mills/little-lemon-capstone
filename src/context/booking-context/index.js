import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import {
  availableTimes,
  startDate,
  endDate,
} from '../../constants/available-reservation-times'

import {
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  UPDATE_RESERVATION_TIMES,
} from './actions'

import { checkWindow } from '../../utils/isBrowser'

const getLocalStorage = () => {
  if (checkWindow()) {
    let llTable = localStorage.getItem('ll-table')
    if (llTable) {
      return JSON.parse(localStorage.getItem('ll-table'))
    } else {
      return {resDate: '', resTime: '', guests: '', occasion: ''}
    }
  }
  return {}
}

const getLocalReservations = () => {
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
  reservation: {},
  table: getLocalStorage(),
  userReservations: getLocalReservations(),
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


  useEffect(() => {
    localStorage.setItem('ll-table', JSON.stringify(state.table))
  }, [state.table])


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
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
