import React, { useState } from 'react'
import { InputStep, SummaryStep } from '../components/'

interface BuyflowProps {
  productId: ProductIds
  steps: Array<any>
}

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [stepNumber, setStepNumber] = useState(0)
  const [collectedData, updateData] = useState<Record<string, any>>({})
  const getStepCallback = () => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStepNumber(currentStepNumber => currentStepNumber + 1)
  }
  const currentStep = props.steps[stepNumber];
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {currentStep ? (
        <InputStep 
          required={currentStep.required}
          entries={currentStep.entries}
          slug={currentStep.slug}
          cb={getStepCallback()}
        />
      ) : ( 
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default Buyflow
