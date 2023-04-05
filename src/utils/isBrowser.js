const isBrowser = typeof window !== `undefined`

export const checkWindow = ()=>{
  if (!isBrowser){
    return false
  }
  else{
    return true
  }
}
