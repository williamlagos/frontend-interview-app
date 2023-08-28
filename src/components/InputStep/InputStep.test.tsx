import React from 'react'
import { render, screen } from '@testing-library/react'

import { commonSteps } from '../../app/config'
import InputStep from './InputStep'

test('renders basic input step', () => {
  render(
    <InputStep
      required={true}
      entries={commonSteps[0].entries}
      slug='test'
      cb={() => {}}
    />
  )
  const textElement = screen.getByText(/E-mail/i)
  expect(textElement).toBeInTheDocument()
})