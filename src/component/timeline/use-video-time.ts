import { useState } from 'react'
import { useInterval } from 'react-use'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'


export const useVideoTime = (element: HTMLMediaElement, state: HTMLMediaState) => {
  const [time, setTime] = useState<number>(0)

  useInterval(() => 
    setTime(element?.currentTime || 0),
    state.paused ? null : 20
  )

  return time
}
