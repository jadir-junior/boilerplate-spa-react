import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomePage from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo"></div>
  }
}))

describe('<HomePage />', () => {
  it('should render then HomePage', () => {
    const { container } = renderWithTheme(<HomePage />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render with theme', () => {
    const { container } = renderWithTheme(<HomePage />)

    expect(container.firstChild?.firstChild).toHaveStyle({
      maxWidth: '130rem'
    })
  })

  it('should render a <Logo /> component', () => {
    renderWithTheme(<HomePage />)

    expect(screen.getByTestId(/mock logo/i)).toBeInTheDocument()
  })

  it('should render a heading', () => {
    renderWithTheme(<HomePage />)
    expect(
      screen.getByRole('heading', {
        name: /boilerplate criado por jadir junior/i
      })
    ).toBeInTheDocument()
  })
})
