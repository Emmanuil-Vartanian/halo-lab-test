import React from 'react'

import { ButtonStyled } from './style'

interface ButtonProps {
  title: string
  variant: 'contained' | 'outlined'
  onClick?: () => void
  type?: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ title, onClick, variant, type }) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant} type={type}>
      {title}
    </ButtonStyled>
  )
}

export default Button
