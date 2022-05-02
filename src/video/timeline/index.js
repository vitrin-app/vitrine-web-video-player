import styles from './index.module.css'

import { useVideoTime } from './use-video-time'
import { useVideoSegments, useSegmentControls } from './segments'


export const Timeline = ({ timeline, state, element, controls }) => {
  const time = useVideoTime(element, state)
  const { segments, index } = useVideoSegments(timeline, time, state)
  const { seekNext, seekPrev } = useSegmentControls(segments, index, state, controls)

  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.inner}>
        {
          segments.map(({ start, end, progress }, index) => (
            <div className={styles.segment}
              style={{ left: `${start * 100}%`, width: `calc(${(end - start) * 100}% - 4px)` }}
              key={index}>
              <div className={styles.segmentInner}>
                <div className={styles.segmentProgress} style={{ width: `${progress * 100}%` }} />
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className={`${styles.seek} ${styles.left}`} onClick={seekPrev}/>
      <div className={`${styles.seek} ${styles.right}`} onClick={seekNext}/>
    </>
  )
}
