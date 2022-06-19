import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
`

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    max-width: 750px;
  }
  @media (max-width: 550px) {
    max-width: 320px;
  }
`
