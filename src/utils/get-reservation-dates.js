/* eslint-disable no-unused-vars */

const [yr, mo, dt] = new Date().toJSON().split('T')[0].split('-')

const todayString = new Date(`${yr}-${mo}-${dt}`)



const createEventDate = (days_from_today=0) => {
  let [eventDate, eventTime] = (
      new Date(todayString.setDate(Number(dt) + Number(days_from_today)))
  ).toJSON().split('T')
  return eventDate
}

const startDate = createEventDate(1)
const endDate = createEventDate(14)

const initTimes = [ '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM' ]

//2023-04-21

const availableReservations = Array.from({length: 14}, (_, idx) =>{
  let eventDate = new Date(todayString.setDate(Number(dt) + idx + 1)).toJSON().split('T')[0]
  return {id:idx + 1, dt: eventDate,  times: [...initTimes]  }
})

export {
  startDate,
  endDate,
  availableReservations
}

