import React from 'react'

import { Container, Main } from './style'

import Home from 'pages/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from 'store'

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Container>
          <Main>
            <Home />
          </Main>
        </Container>
      </PersistGate>
    </Provider>
  )
}

export default App
