import { useState } from 'react'
import { useInterval } from 'react-use'


export const useVideoTime = (element, state) => {
  const [time, setTime] = useState(0)

  useInterval(() => 
    setTime(element?.currentTime || 0),
    state.paused ? null : 20
  )

  return time
}
