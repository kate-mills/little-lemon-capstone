export const convertTime = time => {
  let [hour, min] = time.split(':')
  hour = Number(hour)
  min = !min ? '00' : min

  let isValid = !(!hour || hour > 24 || hour < 1 || Number(min) > 59)
  let response = { time, stdTime: '', valid: isValid }

  if (isValid) {
    let suffix = hour >= 12 ? 'PM' : 'AM'
    let stdHour = hour > 12 ? hour - 12 : hour
    return { ...response, stdTime: `${stdHour}:${min} ${suffix}` }
  }
  return { ...response }
}
