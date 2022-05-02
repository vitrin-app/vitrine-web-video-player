import { useCallback } from 'react'


const ONE_FRAME = 1 / 30


const next = (segments, index) => {
  return index < segments.length - 1 ? index + 1 : 0
}


const prev = (segments, index) => {
  const current = segments[index]
  if (current.progress < .25) {
    return index > 0 ? index - 1 : segments.length - 1
  } else {
    return index
  }
}


export const useSegmentControls = (segments, index, state, controls) => {
  const seekNext = useCallback(
    () => {
      controls.seek(segments[next(segments, index)].start * state.duration + ONE_FRAME)
      controls.play()
    },
    [controls, index, segments, state.duration]
  )

  const seekPrev = useCallback(
    () => {
      controls.seek(segments[prev(segments, index)].start * state.duration + ONE_FRAME)
      controls.play()
    },
    [controls, index, segments, state.duration]
  )

  return {
    seekNext,
    seekPrev,
  }
}
