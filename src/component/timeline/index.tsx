import React from 'react'

import styles from './index.module.css'

import { useVideoTime } from './use-video-time'
import { useVideoSegments, useSegmentControls } from './segments'
import { Timeline } from './types'
import { HTMLMediaControls, HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'


export interface TimelineProps {
  timeline: Timeline,
  state: HTMLMediaState,
  element: HTMLMediaElement,
  controls: HTMLMediaControls,
}


export const TimelineViewer = ({ timeline, state, element, controls }: TimelineProps) => {
  const time = useVideoTime(element, state)
  const { segments, index } = useVideoSegments(timeline, time, state)
  const { seekNext, seekPrev } = useSegmentControls(segments, index, state, controls)

  return (
    <>
      <div className={styles.timeline}>
        <div className={styles.inner}>
          {
            segments.map(({ start, end, progress }, _index) => (
              <div className={styles.segment}
                style={{ left: `${start * 100}%`, width: `calc(${(end - start) * 100}% - 4px)` }}
                key={_index}>
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


export * from './types'
