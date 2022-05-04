/* eslint-disable no-undef */
jest.mock('react-use', () => {
  const og = jest.requireActual('react-use')

  return {
    __esModule: true,
    ...og,
    useVideo: (args) => {
      const [video, state, controls, ref] = og.useVideo(args)

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
