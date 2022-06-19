import styled from 'styled-components'

export const SuccessBlock = styled.div`
  text-align: center;
  font-size: 26px;
  padding: 20px 10px;
  > div {
    margin-bottom: 25px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
    > svg {
      width: 100px;
    }
  }
`
