import { createReducer } from 'typesafe-actions'

import { setCardsToStore } from '../actions'

const cardsInitialState = {
  data: []
}

const cardsReducer = createReducer(cardsInitialState).handleAction(
  setCardsToStore,
  (state, { payload }) => {
    return {
      data: [...payload]
    }
  }
)

export default cardsReducer
