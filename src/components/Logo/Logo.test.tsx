import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render then Logo', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render  with color default yellow', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/logo/i).parentElement).toHaveStyle({
      color: 'yellow'
    })
  })

  it('should render with a color is passed', () => {
    render(<Logo color="blue" />)

    expect(screen.getByLabelText(/logo/i).parentElement).toHaveStyle({
      color: 'blue'
    })
  })
})
