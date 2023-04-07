/* eslint-disable no-unused-vars */

const [weekDay, mo, dt, yr, time] = ((new Date()).toString()).split(' ')

const todayString = new Date(`${mo} ${dt}, ${yr} ${time}`);

const createEventDate = (days_from_today=0) => {
  let [eventDate, eventTime] = (
      new Date(todayString.setDate(Number(dt) + Number(days_from_today)))
  ).toJSON().split('T')
  return eventDate
}

const startDate = createEventDate(1)
const endDate = createEventDate(14)

const initTimes = [ '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '05:00 PM', '06:00 PM', '07:00 PM' ]


const availableReservations = Array.from({length: 7}, (_, idx) =>{
  let avail = new Date(todayString.setDate(Number(dt) + idx + 1))
  return {id:idx + 1, dt: avail,  times: [...initTimes]  }
})
export {
  startDate,
  endDate,
  availableReservations
}

