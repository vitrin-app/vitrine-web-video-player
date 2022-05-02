import { useMemo } from 'react'


const createSegments = (timeline, duration) => {
  const res = timeline.map((stamp, index) => ({
    start: stamp.t / duration,
    end: (timeline[index + 1] || { t: duration }).t / duration,
  }))

  if (res[0].start !== 0) {
    res.unshift({
      start: 0,
      end: res[0].start,
    })
  }

  return res
}


const segmentProgress = (segment, time) => {
  const R = (time - segment.start) / (segment.end - segment.start)

  return Math.min(1, Math.max(0, R))
}


export const useVideoSegments = (timeline, time, state) => {
  const segments = useMemo(() => createSegments(timeline, state.duration), [timeline, state.duration])

  return useMemo(() => {
    const relative = time / state.duration
    let current = segments[0]
    let index = -1

    segments.forEach((segment, i) => {
      segment.progress = segmentProgress(segment, relative)
      if (segment.progress > 0 && segment.progress < 1) {
        current = segment
        index = i
      }
    })

    return { segments, current, index }
  }, [segments, time, state.duration])
}
