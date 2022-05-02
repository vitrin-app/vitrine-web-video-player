import './App.css'

import { Video } from './video'


function App() {
  const timeline = [
    {
        t: 5.2716666666666665
    },
    {
        t: 11.743333333333332
    }
  ]

  const url = 'https://dcgso3dpn5lig.cloudfront.net/5fc04034-78cb-4f44-adf9-4b0dfeaf78bb.mp4'

  return (
    <div className='App'>
      <Video url={url} timeline={timeline} />
    </div>
  )
}

export default App
