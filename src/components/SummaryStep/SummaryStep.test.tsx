import React from 'react'
import { render, screen } from '@testing-library/react'

import SummaryStep from './SummaryStep'
import { BrowserRouter } from 'react-router-dom'

test('renders basic summary step', () => {
  window.history.pushState({}, 'Test page', '/buy/insurance_dev')
  render(
    <SummaryStep 
      collectedData={[{
        'email': {
          type: 'email',
          value: 'william.lagos@icloud.com'
        }
      }]} 
    />,
    {wrapper: BrowserRouter}
  )
  const textElement = screen.getByText(/Purchase/i)
  expect(textElement).toBeInTheDocument()
})