# Vitrine Video Player Component


[![tests](https://img.shields.io/github/workflow/status/vitrin-app/vitrine-web-video-player/Test?label=tests&logo=mocha&logoColor=green)](https://github.com/loreanvictor/serverless-cloud-data-utils/actions?query=workflow%3A%22Test+and+Report+Coverage%22)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/99a60df4002d4284aec9f227ac53a32e)](https://www.codacy.com/gh/vitrin-app/vitrine-web-video-player/dashboard?utm_source=github.com&utm_medium=referral&utm_content=vitrin-app/vitrine-web-video-player&utm_campaign=Badge_Coverage)
[![version](https://img.shields.io/npm/v/@vitrin/web-video-player?logo=npm)](https://www.npmjs.com/package/@vitrin/web-video-player)


A React component for playing mobile-friendly videos, with a _story-like_ timeline for easier navigation
through the video. [Check out a sample](https://web.vitrine.cloud/listing/8dbabad3-41c6-4fdd-b60a-15bd24427861). This component
is used on [Vitrine](https://vitrine.cloud)'s web client.

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

> You need to have React 17+ installed, ideally with a bundler handling css files. If not, you can link
> the stylesheets directly from `node_modules/@vitrin/web-video-player/dist/index.css`.

## Contribution

```bash
npm start        # --> runs the preview of the component
```
```bash
npm run build    # --> builds the component for production
```
```bash
npm test         # --> runs the tests
```
```bash
npm run coverage # --> runs the tests and reports the coverage
```