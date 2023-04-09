import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

import {fetchAPI } from '../../api'
import {startDate, endDate } from '../../utils/get-reservation-dates'

import {
  CLEAR_FORM,
  UPDATE_RES_DATE,
  UPDATE_RES_TIME,
  UPDATE_GUESTS,
  UPDATE_OCCASION,
  CLEAR_MESSAGE,
  FETCH_API,
  SUBMIT_API,
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
  table: { resDate: startDate, resTime: '', guests: '', occasion: '' },
  userReservations: getLocalUserReservations(),
  availableTimes: [],
  startDate,
  endDate,
  initTimes: [],
}

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const submitAPI  = (data = {}) => {
    dispatch({ type: SUBMIT_API, payload: { data } })
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

  useEffect(()=>{
    let apiTimes = fetchAPI(new Date(state.table.resDate))
    dispatch({type: FETCH_API, payload: {times: [...apiTimes]}})
  }, [state.table.resDate])


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
        submitAPI,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  return useContext(BookingContext)
}
