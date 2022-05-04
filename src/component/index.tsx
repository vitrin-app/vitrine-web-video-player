import React from 'react'
import { useVideo } from 'react-use'

import styles from './index.module.css'

import { TimelineViewer, Timeline } from './timeline'
import { PlayIcon } from './play.icon'
import { PauseIcon } from './pause.icon'


export interface VideoProps {
  url: string
  timeline: Timeline
}


export const Video = ({url, timeline}: VideoProps) => {
  const [ video, state, controls, ref ] = useVideo(
    <video src={url} loop playsInline/>
  )

  const toggle = () => state.paused ? controls.play() : controls.pause()

  return (
    <>
      <div className={styles.holder}>
        {video}
        <div className={`${styles.controls} ${state.paused ? styles.paused : ''}`} onClick={toggle}>
          {state.paused ? <PlayIcon/> : <PauseIcon/>}
        </div>
        {
          timeline &&
          <TimelineViewer timeline={timeline} state={state} element={ref.current} controls={controls}/>
        }
      </div>
      <div className={styles.touchZone} data-justmobile='true' onClick={toggle}/>
    </>
  )
}
