import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1130px;
  width: 100%;
  > a {
    text-decoration: none;
  }
  @media (max-width: 1050px) {
    gap: 20px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardBlock = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  max-width: 350px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    box-shadow: 24px 24px 40px rgb(75 207 160 / 8%);
    transform: translateX(10px);
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`

export const Category = styled.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
`

export const Name = styled.div`
  text-transform: capitalize;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 8px 0px 40px;
  @media (max-width: 650px) {
    font-size: 35px;
  }
`

export const BuyProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PriceBlock = styled.div`
  letter-spacing: -0.02em;
  color: #000000;
  display: flex;
  margin-right: 10px;
`

export const Currency = styled.div`
  font-size: 30px;
  line-height: 58px;
  margin-right: 5px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`

export const Price = styled.div`
  font-size: 60px;
  line-height: 72px;
  @media (max-width: 650px) {
    font-size: 40px;
  }
`

export const BtnBuy = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  > button {
    text-transform: initial;
  }
`
