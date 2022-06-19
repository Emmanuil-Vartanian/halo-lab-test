import React, { useState } from 'react'

import { BtnClose, Container } from './style'

import CloseSvg from 'assets/svg/CloseSvg'
import InfoProduct from './containers/InfoProduct'
import FormFields from './containers/FormFields'
import SuccessSendForm from './containers/SuccessSendForm'

interface PopUpForBuyProps {
  buyProduct: Record<string, any>
  closeModal: () => void
}

const PopUpForBuy: React.FC<PopUpForBuyProps> = ({ buyProduct, closeModal }) => {
  const [successSendForm, setSuccessSendForm] = useState(false)

  const handleSuccessSendForm = () => {
    setSuccessSendForm(true)
  }

  return (
    <Container>
      <BtnClose onClick={closeModal}>
        <CloseSvg />
      </BtnClose>
      {!successSendForm ? (
        <>
          <InfoProduct buyProduct={buyProduct} />
          <FormFields buyProduct={buyProduct} handleSuccessSendForm={handleSuccessSendForm} />
        </>
      ) : (
        <SuccessSendForm />
      )}
    </Container>
  )
}

export default PopUpForBuy
