import React from 'react'
import { render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render then Logo', () => {
    render(<Logo />)
  })
})
