import { createReducer } from 'typesafe-actions'

import { clearEffectLoading, setEffectLoading } from '../actions'

export interface StateToProps {
  loading: { [name: string]: boolean }
}

export const initialState: StateToProps = {
  loading: {}
}

const appReducers = createReducer(initialState)
  .handleAction(setEffectLoading, (state, { payload }) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.name]: true
      }
    }
  })
  .handleAction(clearEffectLoading, (state, { payload }) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        [payload.name]: false
      }
    }
  })

export default appReducers
