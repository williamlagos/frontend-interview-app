import React, { useState } from 'react'
import { validateValues } from '../../app/validation'

interface InputStepProps {
  cb: (field: string, value: Record<string, any>) => void
  entries: Record<string, any>
  required: boolean
  slug: string
}

const InputStep: React.FC<InputStepProps> = (props) => {
  const [inputValues, setInputValues] = useState<Record<string, any>>({})
  const [validationMsg, setValidationMsg] = useState<string>('')
  return (
    <>
      <div>
        {Object.entries(props.entries).map(([slug, input]) => (
          <div key={slug}>
            {`${input.label}: `}
            <input 
              onChange={({ target: {value} }) => {
                setInputValues({ 
                  ...inputValues, 
                  [input.label]: {
                    type: input.type,
                    value
                  }
                })
              }}
              type={input.type}
            />
          </div>
        ))}
      </div>
      <div style={{ color: "red" }}>{validationMsg}</div>
      <button onClick={() => {
        const validation = validateValues(inputValues, props.required)
        if (validation.length === 0) {
          props.cb(props.slug, inputValues)
          setValidationMsg('')
          setInputValues({}) 
        } else {
          setValidationMsg(validation)
        }
      }}>Next</button>
    </>
  )
}

export default InputStep
