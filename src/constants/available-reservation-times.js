const availableTimes = [
  {time: '12:00 PM', dates: []},
  {time: '01:00 PM', dates: [] },
  {time: '02:00 PM', dates: [] },
  {time: '03:00 PM', dates: [] },
  {time: '05:00 PM', dates: [] },
  {time: '06:00 PM', dates: [] },
  {time: '07:00 PM', dates: [] },
]

const getEndDate = (yr, mo) => {
  let d = new Date()
  d.setFullYear(yr, mo+1, 0)
  

  // after setFullYear - day appears to be indexed like month
  let day = d.getDate() - 1

  day = day < 10 ? `0${day}` : day
  mo = mo < 10 ? `0${mo}` : mo

  return `${yr}-${mo}-${day}`
}

const getStartDate = (yr, mo) => {
  let d = new Date()
  d.setTime(d.getTime() + 1000 * 3600 * 24)

  let day = d.getDate()
  day = day < 10 ? `0${day}` : day
  mo = mo < 10 ? `0${mo}` : mo

  return `${yr}-${mo}-${day}`
}


let d = new Date()
let mo = d.getMonth() + 1
let yr = d.getFullYear()

let endDate = getEndDate(d.getFullYear(), mo)
let startDate = getStartDate(yr, mo)

export { availableTimes, startDate, endDate }
