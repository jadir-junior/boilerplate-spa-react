import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import App from './App'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo"></div>
  }
}))

describe('<App />', () => {
  it('should render <App />', () => {
    const { container } = renderWithTheme(<App />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render with theme', () => {
    const { container } = renderWithTheme(<App />)

    expect(container.firstChild).toHaveStyle({
      maxWidth: '130rem'
    })
  })

  it('should render a <Logo /> component', () => {
    renderWithTheme(<App />)

    expect(screen.getByTestId(/mock logo/i)).toBeInTheDocument()
  })

  it('should render a heading', () => {
    renderWithTheme(<App />)
    expect(
      screen.getByRole('heading', {
        name: /boilerplate criado por jadir junior/i
      })
    ).toBeInTheDocument()
  })
})
