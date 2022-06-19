import React, { useState } from 'react'

import { ErrorWarning, FormBlock } from './style'

import Input from 'components/Input'
import CloseSvg from 'assets/svg/CloseSvg'
import Button from 'components/Button'
import LoaderSvg from 'assets/svg/LoaderSvg'
import { numberOfCharacters, onlyLetters, onlyNumbers, requiredField } from 'services/validations'
import { useDispatch } from 'react-redux'
import { productPurchase } from 'pages/Home/store/actions'
import useLoadingEffect from 'services/hooks/useLoadingEffect/useLoadingEffect'
import { EFFECT_LOADING } from 'constants/effectLoading'

interface FormFieldsProps {
  buyProduct: Record<string, any>
  handleSuccessSendForm: () => void
}

const FormFields: React.FC<FormFieldsProps> = ({ buyProduct, handleSuccessSendForm }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState({ value: '', error: null })
  const [phone, setPhone] = useState({ value: '', error: null })
  const productPurchaseLoader = useLoadingEffect(EFFECT_LOADING.PRODUCT_PURCHASE)

  const handleChangeName = value => {
    setName({ value: value, error: null })
  }

  const handleChangePhone = value => {
    setPhone({ value: value, error: null })
  }

  const nameValidation = () => {
    if (requiredField(name.value, setName)) {
      if (onlyLetters(name.value, setName)) {
        return true
      }
    }
    return false
  }

  const phoneValidation = () => {
    if (requiredField(phone.value, setPhone)) {
      if (onlyNumbers(phone.value, setPhone)) {
        if (numberOfCharacters(phone.value, 12, setPhone)) {
          return true
        }
      }
    }
    return false
  }

  const handleSubmit = e => {
    e.preventDefault()
    nameValidation()
    phoneValidation()
    if (nameValidation() && phoneValidation()) {
      const productPurchaseData = {
        userName: name.value,
        phone: phone.value,
        product: { ...buyProduct }
      }
      dispatch(productPurchase(productPurchaseData, handleSuccessSendForm))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormBlock>
        <Input
          value={name.value}
          onChange={handleChangeName}
          placeholder="Name"
          error={name.error}
          validation={nameValidation}
          endAdornment={
            <ErrorWarning>
              <CloseSvg />
            </ErrorWarning>
          }
        />
        <Input
          value={phone.value}
          onChange={handleChangePhone}
          placeholder="Phone number"
          error={phone.error}
          validation={phoneValidation}
          endAdornment={
            <ErrorWarning>
              <CloseSvg />
            </ErrorWarning>
          }
        />
        {!productPurchaseLoader ? (
          <Button title="Order" variant="outlined" type="submit" />
        ) : (
          <LoaderSvg background="#fff" width={100} height={100} />
        )}
      </FormBlock>
    </form>
  )
}

export default FormFields
