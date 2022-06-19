import styled from 'styled-components'

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  > div:first-child {
    margin-bottom: 16px;
  }
  > button {
    margin-top: 32px;
  }
  @media (max-width: 500px) {
    margin-top: 12px;
  }
`

export const ErrorWarning = styled.div`
  background: #e43f3f;
  border-radius: 50%;
  padding: 2px;
  height: 24px;
  margin-right: 16px;
  path {
    stroke: #fff;
  }
`
