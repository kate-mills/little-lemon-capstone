const availResTimes = [
  {id: 0, time: '12:00 PM', dates: []},
  {id: 1, time: '01:00 PM', dates: [] },
  {id: 2, time: '02:00 PM', dates: [] },
  {id: 3, time: '03:00 PM', dates: [] },
  {id: 4, time: '05:00 PM', dates: [] },
  {id: 5, time: '06:00 PM', dates: [] },
  {id: 6, time: '07:00 PM', dates: [] },
]


const getEndDate = (yr, mo) => {
  let d = new Date()
  d.setFullYear(yr, mo+1, 0)
  
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
let day = d.getDate()
let mo = d.getMonth() + 1
let yr = d.getFullYear()
console.log('month:', mo)
console.log('day: ', day)

let endDate = getEndDate(d.getFullYear(), mo)
let startDate = getStartDate(yr, mo)


console.log('startDate', startDate)
console.log('endDate', endDate)

export { availResTimes, startDate, endDate }
