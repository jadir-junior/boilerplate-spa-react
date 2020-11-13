import React from 'react'
import { render } from '@testing-library/react'

import HomePage from '.'

describe('<HomePage />', () => {
  it('should render then HomePage', () => {
    render(<HomePage />)
  })
})
