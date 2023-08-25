import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders get started with developer insurance link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Get started with Developer Insurance/i)
  expect(linkElement).toBeInTheDocument()
})


test('renders get started with designer insurance link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Get started with Designer Insurance/i)
  expect(linkElement).toBeInTheDocument()
})