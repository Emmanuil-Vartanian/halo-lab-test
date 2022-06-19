import React from 'react'

import { SuccessBlock } from './style'

import SuccessSvg from 'assets/svg/SuccessSvg'

const SuccessSendForm: React.FC = () => {
  return (
    <SuccessBlock>
      <div>Thank you for order.</div>
      <div>We will contact you shortly!</div>
      <SuccessSvg />
    </SuccessBlock>
  )
}

export default SuccessSendForm
