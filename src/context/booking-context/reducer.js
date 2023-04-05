import {
  UPDATE_RESERVATION_TIMES,
} from './actions'

const booking_reducer = (state, action) => {

  if(action.type === UPDATE_RESERVATION_TIMES){
    const {data} = action.payload
    const {resTime} = data

    const tempTime = state.availableTimes.find(avail => avail.time === resTime)
    if(tempTime){
      const tempList =  state.availableTimes.map(({time, dates}) =>{
        if(time === resTime){
          let tempDates = dates.length > 0 ? [...dates, {...data}]: [{...data}]
          return  {time, dates: [...tempDates]}
        }
        return {time, dates}
      })
      console.log(tempList)
      return {...state, availableTimes: tempList}
    }
    return {...state}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default booking_reducer
