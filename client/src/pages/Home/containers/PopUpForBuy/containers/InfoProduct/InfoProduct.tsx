import React from 'react'

import { Category, Currency, Name, Price, PriceBlock } from '../../../Cards/style'
import { InfoProductBlock } from './style'

interface InfoProductProps {
  buyProduct: Record<string, any>
}

const InfoProduct: React.FC<InfoProductProps> = ({ buyProduct }) => {
  return (
    <InfoProductBlock>
      <Category>{buyProduct?.category}</Category>
      <Name>{buyProduct?.name}</Name>
      <PriceBlock>
        <Currency>$</Currency>
        <Price>{buyProduct?.price}</Price>
      </PriceBlock>
    </InfoProductBlock>
  )
}

export default InfoProduct
