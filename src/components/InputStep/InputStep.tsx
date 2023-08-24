import React, { useState } from 'react'

interface InputStepProps {
  cb: (field: string, value: number | string) => void
  slug: string
  type: string
  label: string
}

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const InputStep: React.FC<InputStepProps> = (props) => {
  const [inputValue, setInputValue] = useState<number | string>('')
  const [validationMsg, setValidationMsg] = useState<string>('')
  return (
    <>
      <div>
        {`${props.label}: `}
        <input
          onChange={({ target: {value} }) => {
            setInputValue(props.type === 'number' ? Number(value) : String(value))
          }}
          type={props.type}
        />
      </div>
      <div style={{ color: "red" }}>{validationMsg}</div>
      <button onClick={() => {
        if (String(inputValue).length === 0) {
          setValidationMsg('The field is empty')
        } else if (props.type === 'email' && !validateEmail(String(inputValue))) {
          setValidationMsg('The field was filled with an invalid e-mail')
        } else {
          props.cb(props.label, inputValue)
          setValidationMsg('')
          setInputValue('')
        } 
      }}>Next</button>
    </>
  )
}

export default InputStep
