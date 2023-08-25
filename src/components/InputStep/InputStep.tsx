import React, { useState } from 'react'

interface InputStepProps {
  cb: (field: string, value: Record<string, any>) => void
  entries: Record<string, any>
  required: boolean
  slug: string
}

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
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
        let validation = ''
        if (props.required && Object.values(inputValues).length === 0) {
          validation = 'The field(s) is(are) empty'
        } else {
          Object.values(inputValues).forEach(({ type: inputType, value: inputValue }) => {
            switch (inputType) {
              case 'text':
                if (isNaN(inputValue) && String(inputValue).length < 3) {
                  validation = 'The name was filled with too few characters'
                }
                break
              case 'email':
                if (isNaN(inputValue) && !validateEmail(String(inputValue))) {
                  validation = 'The field was filled with an invalid e-mail'
                }
                break
              case 'number':
                if (!isNaN(inputValue) && inputValue < 18) {
                  validation = 'The age must be 18 or older'
                }
            }
          })
          if (validation.length === 0) {
            props.cb(props.slug, inputValues)
            setValidationMsg('')
            setInputValues({}) 
          } else {
            setValidationMsg(validation)
          }
        }
      }}>Next</button>
    </>
  )
}

export default InputStep
