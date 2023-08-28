import React from 'react'
import { render, screen } from '@testing-library/react'

import Buyflow from './Buyflow'
import { ProductIds, commonSteps, extraSteps } from '../../app/config'

test('renders buyflow with just common steps', () => {
  render(
    <Buyflow 
      productId={ProductIds.devIns}
      steps={[...commonSteps]} 
    />
  )
  const textElement = screen.getByText(/E-mail/i)
  expect(textElement).toBeInTheDocument()
})

test('renders buyflow with extra steps', () => {
  render(
    <Buyflow 
      productId={ProductIds.desIns}
      steps={[...commonSteps, ...extraSteps]} 
    />
  )
  const textElement = screen.getByText(/E-mail/i)
  expect(textElement).toBeInTheDocument()
})