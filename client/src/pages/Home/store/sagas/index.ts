import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import { getCardsAPI, productPurchaseAPI } from '../api'
import { CardActionTypes } from '../types'
import { setCardsToStore } from '../actions'
import { clearEffectLoading, setEffectLoading } from 'containers/App/store/actions'
import { EFFECT_LOADING } from 'constants/effectLoading'

export function* getMyMessageSaga(): SagaIterator {
  try {
    yield put(setEffectLoading(EFFECT_LOADING.GET_PRODUCTS))
    const { data, status } = yield call(getCardsAPI)

    if (status === 200) {
      yield put(setCardsToStore(data))
      yield put(clearEffectLoading(EFFECT_LOADING.GET_PRODUCTS))
    }
  } catch (error) {
    const { response } = error
    console.error(CardActionTypes.GET_CARDS, response)
    yield put(clearEffectLoading(EFFECT_LOADING.GET_PRODUCTS))
  }
}

export function* productPurchaseSaga(action): SagaIterator {
  const { data, successSendForm } = action.payload

  try {
    yield put(setEffectLoading(EFFECT_LOADING.PRODUCT_PURCHASE))
    const { status } = yield call(productPurchaseAPI, data)

    if (status === 200) {
      yield put(clearEffectLoading(EFFECT_LOADING.PRODUCT_PURCHASE))
      successSendForm()
    }
  } catch (error) {
    const { response } = error
    console.error(CardActionTypes.PRODUCT_PURCHASE, response)
    yield put(clearEffectLoading(EFFECT_LOADING.PRODUCT_PURCHASE))
  }
}

export default function* root() {
  yield all([
    takeLatest(CardActionTypes.GET_CARDS, getMyMessageSaga),
    takeLatest(CardActionTypes.PRODUCT_PURCHASE, productPurchaseSaga)
  ])
}
