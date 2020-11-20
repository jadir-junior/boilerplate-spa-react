import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo"></div>
  }
}))

describe('<App />', () => {
  it('should render <App />', () => {
    const { container } = render(<App />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render a <Logo /> component', () => {
    render(<App />)

    expect(screen.getByTestId(/mock logo/i)).toBeInTheDocument()
  })

  it('should render a heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /boilerplate criado por jadir junior/i
      })
    ).toBeInTheDocument()
  })
})
