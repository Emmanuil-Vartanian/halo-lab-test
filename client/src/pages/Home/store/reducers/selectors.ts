import { createSelector } from 'reselect'

const getCardsState = state => state.cards.data

export const getCardsSelector = createSelector([getCardsState], value => value)
