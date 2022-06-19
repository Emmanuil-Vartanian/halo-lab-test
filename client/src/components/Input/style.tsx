import styled from 'styled-components'

export const InputStyled = styled.input`
  max-width: 290px;
  width: 100%;
  border: none;
  padding: 16px;
  border-radius: 16px;
  outline: none;
`

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ success, error }) =>
      success && !error ? '#4BCFA0' : error ? '#E43F3F' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 16px;
`

export const ErrorMessage = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #e43f3f;
  margin-top: 5px;
`
