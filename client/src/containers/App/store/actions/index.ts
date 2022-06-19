import { createAction } from 'typesafe-actions'

import { ActionTypes } from '../types'

interface SetEffectLoading {
  name: string
}

const setEffectLoading = createAction(ActionTypes.SET_EFFECT_LOADING, (name: string) => ({
  name
}))<SetEffectLoading>()

const clearEffectLoading = createAction(ActionTypes.CLEAR_EFFECT_LOADING, (name: string) => ({
  name
}))<SetEffectLoading>()

export { setEffectLoading, clearEffectLoading }
