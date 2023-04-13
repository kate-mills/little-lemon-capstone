import { fetchAPI } from '../api'

const [yr, mo, dt] = new Date().toJSON().split('T')[0].split('-')
const todayString = new Date(`${yr}-${mo}-${dt}`)

const createEventDate = (days_from_today = 0) => {
  let [eventDate] = new Date(
    todayString.setDate(Number(dt) + Number(days_from_today))
  )
    .toJSON()
    .split('T')
  return eventDate
}

const isoToDisplay = iso => {
  let [yr, mo, dt] = iso.split('-')
  return !!dt ? `${mo}/${dt}/${yr}` : ``
}

const startIso = createEventDate()
const endIso = createEventDate(14)

const initDateTimes = {
  start: {
    iso: startIso,
    display: isoToDisplay(startIso),
  },
  end: {
    iso: endIso,
    display: isoToDisplay(endIso),
  },
  initTimes: [...fetchAPI(new Date(startIso))],
}

export { initDateTimes }
