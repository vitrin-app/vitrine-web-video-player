import React from 'react'
import { expect } from 'chai'
import { render, screen, queryAllByRole } from '@testing-library/react'

import { Video } from '../component'


describe('Rendering', () => {
  it('should render on the screen.', async () => {
    const { container } = render(<Video url='https://some.cdn/random.mp4' timeline={[]}/>)

    const video = container.querySelector('video')
    expect(video).to.not.be.null
    expect(video.src).to.not.be.null
    expect(video.src).to.equal('https://some.cdn/random.mp4')
  })

  it('should render proper timeline element with no given timeline.', async () => {
    render(<Video url='https://some.cdn/random.mp4' timeline={[]}/>)

    expect(screen.queryByRole('timeline')).to.not.be.null
    const timeline = screen.queryByRole('timeline')

    expect(queryAllByRole(timeline, 'segment').length).to.equal(1)
  })
})
