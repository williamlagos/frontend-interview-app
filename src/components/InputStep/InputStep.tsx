import React, { useState } from 'react'

import { validateValues } from '../../app/validation'
import { Entries, InputValues } from '../../app/types'

interface InputStepProps {
  cb: (field: string, value: InputValues) => void
  entries: Entries
  required: boolean
  slug: string
}

/**
 * Reusable component for creating custom steps with the proper entries
 * @param callback - function to collect data with its proper label and data
 * @param {Entries} entries - input entries with label, type and default value
 * @param {boolean} required - flag for indicating if validators should be run
 * @param {string} slug - identifier for the step
 */
const InputStep: React.FC<InputStepProps> = (props) => {
  const [inputValues, setInputValues] = useState<InputValues>({})
  const [validationMsg, setValidationMsg] = useState<string>('')
  return (
    <>
      <div>
        {Object.entries(props.entries).map(([slug, input]) => (
          <div key={slug}>
            {`${input.label}: `}
            <input 
              data-cy={`${slug}-input`}
              type={input.type}
              onChange={({ target: {value} }) => {
                setInputValues({ 
                  ...inputValues, 
                  [input.label]: {
                    type: input.type,
                    value
                  }
                })
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ color: "red" }}>{validationMsg}</div>
      <button 
        data-cy="next-step"
        onClick={() => {
          const validation = validateValues(inputValues, props.required)
          if (validation.length === 0) {
            props.cb(props.slug, inputValues)
            setValidationMsg('')
            setInputValues({}) 
          } else {
            setValidationMsg(validation)
          }
        }}>
          Next
      </button>
    </>
  )
}

export default InputStep
