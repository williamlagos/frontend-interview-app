import React from 'react'
import { Link } from 'react-router-dom'

import { InputValues } from '../../app/types'

interface SummaryStepProps {
  collectedData: InputValues[]
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const summaryData = Object.values(props.collectedData)
  return (
    <>
      {summaryData.map((item) => Object.entries(item).map(([label, {value}]) => <div key={label}>{label}: {value}</div>))}
      <div>
        <Link to="/purchased=ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
