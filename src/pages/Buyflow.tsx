import React, { useState } from 'react'
import { AgeStep, EmailStep, SummaryStep } from '../components/'

interface BuyflowProps {
  productId: ProductIds
  steps: Array<string>
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [stepNumber, setStepNumber] = useState(0)
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = () => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStepNumber(currentStepNumber => currentStepNumber + 1)
  }
  const currentStep = props.steps[stepNumber];
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback()} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback()} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
