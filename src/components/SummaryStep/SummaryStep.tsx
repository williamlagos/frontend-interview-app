import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: Record<string, any>
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const summaryData = Object.values(props.collectedData)
  return (
    <>
      {summaryData.map((item) => Object.entries(item).map(([label, {value}]: any) => <div key={label}>{label}: {value}</div>))}
      <div>
        <Link to="/purchased=ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
