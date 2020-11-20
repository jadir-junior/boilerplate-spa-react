import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomePage from '.'

describe('<HomePage />', () => {
  it('should render then HomePage', () => {
    const { container } = renderWithTheme(<HomePage />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
