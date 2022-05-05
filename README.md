# Vitrine Video Player Component


[![tests](https://img.shields.io/github/workflow/status/vitrin-app/vitrine-web-video-player/Test?label=tests&logo=mocha&logoColor=green)](https://github.com/loreanvictor/serverless-cloud-data-utils/actions?query=workflow%3A%22Test+and+Report+Coverage%22)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/99a60df4002d4284aec9f227ac53a32e)](https://www.codacy.com/gh/vitrin-app/vitrine-web-video-player/dashboard?utm_source=github.com&utm_medium=referral&utm_content=vitrin-app/vitrine-web-video-player&utm_campaign=Badge_Coverage)
[![version](https://img.shields.io/npm/v/@vitrin/web-video-player?logo=npm)](https://www.npmjs.com/package/@vitrin/web-video-player)


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
