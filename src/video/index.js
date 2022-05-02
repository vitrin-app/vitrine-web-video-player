import styles from './index.module.css'

import { useVideo } from 'react-use'
import { Timeline } from './timeline'
import { ReactComponent as PlayIcon } from './play.svg'
import { ReactComponent as PauseIcon } from './pause.svg'


export const Video = ({url, timeline}) => {
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
          <Timeline timeline={timeline} state={state} element={ref.current} controls={controls}/>
        }
      </div>
      <div className={styles.touchZone} justmobile='true' onClick={toggle}/> 
    </>
  )
}
