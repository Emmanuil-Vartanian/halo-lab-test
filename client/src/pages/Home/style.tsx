import styled from 'styled-components'
import Modal from 'react-modal'

export const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 50px 10px;
`

export const ModalStyled = styled(Modal)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  position: absolute;
  padding: 60px 50px;
  width: 390px;
  @media (max-width: 500px) {
    padding: 30px 20px;
    width: 270px;
  }
`
