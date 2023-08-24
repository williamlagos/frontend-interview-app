import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: Record<string, any>
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {Object.entries(props.collectedData).map(([label, value]) => (
        <div key={label}>{label}: {value}</div>
      ))}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
