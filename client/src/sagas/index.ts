import { all, fork } from 'redux-saga/effects'

import HomeSaga from 'pages/Home/store/sagas'

export default function* rootSaga() {
  yield all([fork(HomeSaga)])
}
