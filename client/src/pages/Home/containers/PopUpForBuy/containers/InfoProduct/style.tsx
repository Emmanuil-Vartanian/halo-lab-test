import styled from 'styled-components'

export const InfoProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-child(2) {
    margin-bottom: 16px;
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
`
