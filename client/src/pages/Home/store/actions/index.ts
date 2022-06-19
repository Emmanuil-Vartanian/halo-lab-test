import { createAction } from 'typesafe-actions'
import { CardActionTypes } from '../types'

/* SAGA ACTIONS */
const getCards = createAction(CardActionTypes.GET_CARDS)()

const productPurchase = createAction(CardActionTypes.PRODUCT_PURCHASE, (data, successSendForm) => ({
  data,
  successSendForm
}))()

/* REDUCER ACTIONS */
const setCardsToStore = createAction(
  CardActionTypes.SET_CARDS_TO_STORE,
  (cards: Record<string, any>[]) => cards
)()

export { getCards, setCardsToStore, productPurchase }
