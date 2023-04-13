/* eslint-disable no-unused-vars */

import { fetchAPI } from '../api'

const [yr, mo, dt] = new Date().toJSON().split('T')[0].split('-')

const todayString = new Date(`${yr}-${mo}-${dt}`)



const createEventDate = (days_from_today=0) => {
  let [eventDate, eventTime] = (
      new Date(todayString.setDate(Number(dt) + Number(days_from_today)))
  ).toJSON().split('T')
  return eventDate
}

const startDate = createEventDate()
const endDate = createEventDate(14)
const times  = fetchAPI(new Date(startDate))


export {
  startDate,
  endDate,
  times,
}

