import { fetchAPI } from '../api'

const d = new Date()
const dt = d.getDate()
const mo = d.getMonth() + 1
const yr = d.getFullYear()

const createEventDate = (days_from_today = 0) => {
  const todayString = new Date(`${yr}-${mo}-${dt}`)
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

const startIso = createEventDate(1)
const endIso = createEventDate(60)

const initDateTimes = {
  start: {
    iso: startIso,
    display: `${mo}/${dt}/${yr}`,
  },
  end: {
    iso: endIso,
    display: isoToDisplay(endIso),
  },
  initTimes: [...fetchAPI(new Date(startIso))],
}

export { isoToDisplay, initDateTimes }
