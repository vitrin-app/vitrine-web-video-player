/* eslint-disable no-undef */
jest.mock('react-use', () => {
  const og = jest.requireActual('react-use')

  return {
    __esModule: true,
    ...og,
    useVideo: (args) => {
      const [video, state, controls, ref] = og.useVideo(args)

      og.useInterval(() => {
        if (!state.paused) {
          ref.current.currentTime += 20 / 1000
        }
      }, state.paused ? null : 20)

      return [
        video,
        { ...state, duration: 10 },
        {
          ...controls,
          seek: time => {
            controls.seek(time)
            video.currentTime = time
            ref.current.currentTime = time
          }
        },
        ref
      ]
    },
  }
})
