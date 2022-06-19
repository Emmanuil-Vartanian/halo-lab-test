import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import appReducer, { StateToProps as AppInitialStateType } from 'containers/App/store/reducers'
import cardsReducer from 'pages/Home/store/reducers'

export interface State {
  app: AppInitialStateType
  cards: Record<string, any>
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cards']
}

const createRootReducer = (): any =>
  persistCombineReducers<State>(persistConfig, {
    app: appReducer,
    cards: cardsReducer
  })

export default createRootReducer
