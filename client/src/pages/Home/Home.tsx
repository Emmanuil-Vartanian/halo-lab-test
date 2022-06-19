import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { HomeContainer, ModalStyled } from './style'

import Cards from './containers/Cards'
import { getCards } from './store/actions'
import PopUpForBuy from './containers/PopUpForBuy'
import useLoadingEffect from 'services/hooks/useLoadingEffect/useLoadingEffect'
import { EFFECT_LOADING } from 'constants/effectLoading'
import LoaderSvg from 'assets/svg/LoaderSvg'

const customStyles = {
  overlay: {
    backgroundColor: '#000000cc'
  },
  content: {
    transform: 'translate(-50%, -50%)',
    background: '#ffffff',
    border: 'none',
    borderRadius: '24px',
    overflow: 'inherit'
  }
}

Modal.setAppElement('#root')

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [buyProduct, setBuyProduct] = useState(null)
  const getProductsLoader = useLoadingEffect(EFFECT_LOADING.GET_PRODUCTS)
  const openModal = buyProduct ? true : false

  const handleBuyProduct = data => () => {
    setBuyProduct(data)
  }

  const closeModal = () => {
    setBuyProduct(null)
  }

  useEffect(() => {
    dispatch(getCards())
  }, [])

  return (
    <HomeContainer>
      {!getProductsLoader ? (
        <Cards handleBuyProduct={handleBuyProduct} />
      ) : (
        <LoaderSvg background="#e5e5e5" />
      )}
      <ModalStyled
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Form-Modal"
      >
        <PopUpForBuy buyProduct={buyProduct} closeModal={closeModal} />
      </ModalStyled>
    </HomeContainer>
  )
}

export default Home
