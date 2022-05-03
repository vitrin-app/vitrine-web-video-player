# Video Player React Component for Vitrine Web

```bash
npm i @vitrin/web-video-player
```
```jsx
import { Video } from '@vitrin/web-video-player'
import '@vitrin/web-video-player/styles'

// ...

export const MyApp = () => (
  // ...
  <Video url='https://my.cdn/some-video-url'
    timeline={[{ t: 1.2 }, { t: 3.5 }]} />
  // ...
)
```
