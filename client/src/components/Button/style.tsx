import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 16px;
  border: 1px solid #0000001a;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  ${({ variant }) =>
    variant === 'outlined'
      ? `
        background: #fff;
        color: #4bcfa0;
        transition: all 0.3s;
        :hover {
          background: #4bcfa0;
          border: 1px solid #4bcfa0;
          color: #fff;
        }
        `
      : variant === 'contained' &&
        `
        background: #4bcfa0;
        color: #fff;
        border: 1px solid #4bcfa0;
        transition: all 0.3s;
        :hover {
          background: #fff;
          color: #4bcfa0;
          border: 1px solid #0000001a;
        }`}
`
