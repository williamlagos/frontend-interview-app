import React from 'react'
import { Link } from 'react-router-dom'

import { InputValues } from '../../app/types'

interface SummaryStepProps {
  collectedData: InputValues[]
}

/**
 * Component that collects the data from all the other steps and then show before confirming the purchase
 * @param {InputValues} collectedData - data collected from other steps, passed as props
 */
const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const summaryData = Object.values(props.collectedData)
  return (
    <>
      {summaryData.map((item) => Object.entries(item).map(([label, {value}]) => <div key={label}>{label}: {value}</div>))}
      <div>
        <Link data-cy="purchase-end" to="/purchased=ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
