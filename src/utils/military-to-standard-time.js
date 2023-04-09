export const convertTime = time => {
  const [hour, min] = time.split(':')
  let num = Number(hour)
  

  return num > 13 ? `${num - 12}:${min}` : time
}
