import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import App from './App'

describe('<App />', () => {
  it('should render <App />', () => {
    const { container } = renderWithTheme(<App />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
