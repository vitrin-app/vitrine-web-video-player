import React from 'react'
import { expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Video } from '../component'


describe('Controls', () => {
  it('should be pausable / playable.', async () => {
    const user = userEvent.setup()
    render(<Video url='https://dcgso3dpn5lig.cloudfront.net/4c2b9850-db70-4aed-8359-4c11f55ef23e.mp4' timeline={[]}/>)

    expect(screen.queryByRole('play-icon')).to.not.be.null
    expect(screen.queryByRole('pause-icon')).to.be.null

    await user.click(screen.getByRole('play-icon'))

    expect(screen.queryByRole('play-icon')).to.be.null
    expect(screen.queryByRole('pause-icon')).to.not.be.null
  })
})
