import React from 'react'
import { render, screen, queryAllByRole } from '@testing-library/react'

import { Video } from '../component'


test('renders on the screen.', async () => {
  const { container } = render(<Video url='https://some.cdn/random.mp4' timeline={[]}/>)

  const video = container.querySelector('video')
  expect(video).not.toBeNull()
  expect(video.src).not.toBeNull()
  expect(video.src).toBe('https://some.cdn/random.mp4')
})


test('renders the proper timeline element with no given timeline.', async () => {
  render(<Video url='https://some.cdn/random.mp4' timeline={[]}/>)

  expect(screen.queryByRole('timeline')).not.toBeNull()
  const timeline = screen.queryByRole('timeline')

  expect(queryAllByRole(timeline, 'segment').length).toBe(1)
})


test('renders the proper timeline element.', async () => {
  render(<Video url='https://some.cdn/random.mp4' timeline={[{ t: 0, }, { t: 1 }]}/>)

  expect(screen.queryByRole('timeline')).not.toBeNull()
  const timeline = screen.queryByRole('timeline')

  expect(queryAllByRole(timeline, 'segment').length).toBe(2)
})


test('renders the proper timeline element.', async () => {
  render(<Video url='https://some.cdn/random.mp4' timeline={[{ t: 1, }, { t: 2 }]}/>)

  expect(screen.queryByRole('timeline')).not.toBeNull()
  const timeline = screen.queryByRole('timeline')

  expect(queryAllByRole(timeline, 'segment').length).toBe(3)
})
