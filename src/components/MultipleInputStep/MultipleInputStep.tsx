import React, { useState } from 'react'

interface MultipleInputStepProps {
  cb: (field: string, value: Record<string, any>) => void
  slug: string
  type: string
  label: string
  entries: Record<string, any>
}

const MultipleInputStep: React.FC<MultipleInputStepProps> = (props) => {
  const [inputValue, setInputValue] = useState<Record<string, any>>({})
  return (
    <>
      <div>
        {Object.entries(props.entries).map(([slug, input]) => (
          <div key={slug}>
            {`${input.label}: `}
            <input 
              onChange={({ target: {value} }) => {
                setInputValue({ ...inputValue, [input.label]: value })
              }}
              type={input.type}
            />
          </div>
        ))}
      </div>
      <button onClick={() => props.cb(props.label, inputValue)}>Next</button>
    </>
  )
}

export default MultipleInputStep
