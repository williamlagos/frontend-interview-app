import React, { useState } from 'react'

interface InputStepProps {
  cb: (field: string, value: number | string) => void
  slug: string
  type: string
  label: string
}

const InputStep: React.FC<InputStepProps> = (props) => {
  const [inputValue, setInputValue] = useState<number | string>('')
  return (
    <>
      <div>
        {`${props.label}: `}
        <input
          onChange={({ target: { value } }) => {
            setInputValue(props.type === 'number' ? Number(value) : value)
          }}
          value={inputValue}
          type={props.type}
        ></input>
      </div>
      <button onClick={() => props.cb(props.slug, inputValue)}>Next</button>
    </>
  )
}

export default InputStep
