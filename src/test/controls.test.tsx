import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Video } from '../component'


test('<Video/> should be pausable / playable.', async () => {
  const user = userEvent.setup()
  render(<Video url='https://dcgso3dpn5lig.cloudfront.net/4c2b9850-db70-4aed-8359-4c11f55ef23e.mp4' timeline={[]}/>)

  expect(screen.queryByRole('play-icon')).not.toBeNull()
  expect(screen.queryByRole('pause-icon')).toBeNull()

  await user.click(screen.getByRole('play-icon'))

  expect(screen.queryByRole('play-icon')).toBeNull()
  expect(screen.queryByRole('pause-icon')).not.toBeNull()
})


test.only('<Video/> should be seekable.', async () => {
  const user = userEvent.setup()
  const { container } = render(
    <Video
      url='https://dcgso3dpn5lig.cloudfront.net/4c2b9850-db70-4aed-8359-4c11f55ef23e.mp4'
      timeline={[{ t: 1 }, { t: 2 }, { t: 3 }]}
    />
  )

  await user.click(screen.getByRole('seek-next'))
  console.log(container.querySelector('video').currentTime)
})
