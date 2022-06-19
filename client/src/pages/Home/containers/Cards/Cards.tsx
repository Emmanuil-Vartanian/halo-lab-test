import React from 'react'
import { useSelector } from 'react-redux'

import {
  BtnBuy,
  BuyProduct,
  CardBlock,
  CardsContainer,
  Category,
  Currency,
  Name,
  Price,
  PriceBlock
} from './style'

import { getCardsSelector } from 'pages/Home/store/reducers/selectors'
import Button from 'components/Button'

interface CardsProps {
  handleBuyProduct: (data: Record<string, any>) => () => void
}

const Cards: React.FC<CardsProps> = ({ handleBuyProduct }) => {
  const cards = useSelector(getCardsSelector)

  const handleBuyCheapest = () => {
    const cheapestProduct = cards.reduce((p, v) => (p.price < v.price ? p : v))
    handleBuyProduct(cheapestProduct)()
  }

  return (
    <>
      <CardsContainer>
        {cards.map(({ category, name, price }, index, arr) => (
          <a href="#" key={index}>
            <CardBlock>
              <Category>{category}</Category>
              <Name>{name}</Name>
              <BuyProduct>
                <PriceBlock>
                  <Currency>$</Currency>
                  <Price>{price}</Price>
                </PriceBlock>
                <Button title="Buy" variant="outlined" onClick={handleBuyProduct(arr[index])} />
              </BuyProduct>
            </CardBlock>
          </a>
        ))}
      </CardsContainer>
      <BtnBuy onClick={handleBuyCheapest}>
        <Button title="Buy cheapest" variant="outlined" />
      </BtnBuy>
    </>
  )
}

export default Cards
