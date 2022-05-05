import { passSomeTime } from './setup/mock-time'

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Video } from '../component'


test('is pausable / playable.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(<Video url='https://some.cdn/random.mp4' timeline={[]}/>)

  expect(container.querySelector('video').paused).toBe(true)

  await user.click(screen.getByRole('play-icon'))
  expect(container.querySelector('video').paused).toBe(false)

  await user.click(screen.getByRole('pause-icon'))
  expect(container.querySelector('video').paused).toBe(true)
})


test('is seekable.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(
    <Video
      url='https://some.cdn/random.mp4'
      timeline={[{ t: 1 }, { t: 3 }, { t: 6 }]}
    />
  )

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(0)
  expect(container.querySelector('video').currentTime).toBeLessThan(0.1)

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(1)
  expect(container.querySelector('video').currentTime).toBeLessThan(1.1)

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(3)
  expect(container.querySelector('video').currentTime).toBeLessThan(3.1)

  await user.click(screen.getByRole('seek-prev'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(1)
  expect(container.querySelector('video').currentTime).toBeLessThan(1.1)

  await user.click(screen.getByRole('pause-icon'))
})


test('seeks back to current segment when more than a quarter of the way through.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(
    <Video
      url='https://some.cdn/random.mp4'
      timeline={[{ t: 1 }, { t: 3 }, { t: 6 }]}
    />
  )

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(1)

  passSomeTime(700)

  await user.click(screen.getByRole('seek-prev'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeLessThan(1.1)

  await user.click(screen.getByRole('seek-prev'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeLessThan(0.1)

  await user.click(screen.getByRole('pause-icon'))
})


test('loops back when seeking backwards.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(
    <Video
      url='https://some.cdn/random-2.mp4'
      timeline={[{ t: 1 }, { t: 3 }, { t: 6 }]}
    />
  )

  await user.click(screen.getByRole('play-icon'))
  passSomeTime()

  await user.click(screen.getByRole('seek-prev'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeGreaterThan(6)
  expect(container.querySelector('video').currentTime).toBeLessThan(6.1)

  await user.click(screen.getByRole('pause-icon'))
})


test('loops when seeking forwards.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(
    <Video
      url='https://dcgso3dpn5lig.cloudfront.net/4c2b9850-db70-4aed-8359-4c11f55ef23e.mp4'
      timeline={[{ t: 1 }, { t: 3 }, { t: 6 }]}
    />
  )

  await user.click(screen.getByRole('play-icon'))
  passSomeTime(3200)

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  await user.click(screen.getByRole('seek-next'))
  passSomeTime()

  expect(container.querySelector('video').currentTime).toBeLessThan(0.1)
  expect(container.querySelector('video').currentTime).toBeGreaterThan(0)

  await user.click(screen.getByRole('pause-icon'))
})


test('will play after seeking.', async () => {
  const user = userEvent.setup({ delay: null })
  const { container } = render(
    <Video
      url='https://dcgso3dpn5lig.cloudfront.net/4c2b9850-db70-4aed-8359-4c11f55ef23e.mp4'
      timeline={[{ t: 1 }, { t: 3 }, { t: 6 }]}
    />
  )

  expect(container.querySelector('video').paused).toBe(true)

  await user.click(screen.getByRole('seek-next'))
  expect(container.querySelector('video').paused).toBe(false)

  passSomeTime()

  await user.click(screen.getByRole('pause-icon'))
  expect(container.querySelector('video').paused).toBe(true)

  passSomeTime()

  await user.click(screen.getByRole('seek-prev'))
  expect(container.querySelector('video').paused).toBe(false)

  await user.click(screen.getByRole('pause-icon'))
})
