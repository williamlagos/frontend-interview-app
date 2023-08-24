import React, { useState } from 'react'

interface InputStepProps {
  cb: (field: string, value: Record<string, any>) => void
  entries: Record<string, any>
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
                setInputValues({ ...inputValues, [input.label]: value })
              }}
              type={input.type}
            />
          </div>
        ))}
      </div>
      <div style={{ color: "red" }}>{validationMsg}</div>
      <button onClick={() => {
        if (Object.values(inputValues).length === 0) {
          setValidationMsg('The field(s) is(are) empty')
        } else {
          Object.entries(inputValues).forEach(([inputLabel, inputValue]) => {
            if (isNaN(inputValue) && String(inputValue).length < 3) {
              setValidationMsg('The name was filled with too few characters')
            } else if (isNaN(inputValue) && inputLabel === 'E-mail' && !validateEmail(String(inputValue))) {
              setValidationMsg('The field was filled with an invalid e-mail')
            } else {
              props.cb(props.slug, inputValues)
              setValidationMsg('')
              setInputValues({}) 
            }
          })
        }
      }}>Next</button>
    </>
  )
}

export default InputStep
