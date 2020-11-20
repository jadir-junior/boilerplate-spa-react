import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render then Logo', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render  with color default yellow', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/logo/i).parentElement).toHaveStyle({
      color: 'yellow'
    })
  })

  it('should render with a color is passed', () => {
    renderWithTheme(<Logo color="blue" />)

    expect(screen.getByLabelText(/logo/i).parentElement).toHaveStyle({
      color: 'blue'
    })
  })
})
