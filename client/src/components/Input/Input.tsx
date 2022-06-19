import React from 'react'

import { ErrorMessage, InputBlock, InputStyled } from './style'

interface InputProps {
  type?: string
  placeholder?: string
  value: string
  onChange: (value) => void
  error?: string
  validation?: () => boolean
  endAdornment?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  validation,
  endAdornment
}) => {
  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <div>
      <InputBlock success={value ? true : false} error={error ? true : false}>
        <InputStyled
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={validation}
        />
        {error && endAdornment}
      </InputBlock>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

export default Input
