import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Root } from 'native-base'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root'

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <RootScreen />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}
