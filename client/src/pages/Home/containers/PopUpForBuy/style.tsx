import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  > div:nth-child(3) {
    margin-bottom: 16px;
    @media (max-width: 500px) {
      margin-bottom: 0;
    }
  }
`

export const BtnClose = styled.div`
  background: #f2f2f2;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  bottom: 107%;
  left: 107%;
  height: 40px;
  cursor: pointer;
  > svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 500px) {
    bottom: 100%;
    left: 95%;
  }
`
