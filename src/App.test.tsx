import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const paragraphElement = screen.getByLabelText(
    /boilerplate criado por jadir junior/i
  )
  expect(paragraphElement).toBeInTheDocument()
})
