import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import AppContainer from './src/navigation'

// Disable some warnings
YellowBox.ignoreWarnings([
  'Warning: Async Storage'
])

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null // eslint-disable-line

// Just for dev: react-navigation state persistance is enabled
export default class App extends Component {
  render() {
    return (
      <AppContainer persistenceKey={navigationPersistenceKey} />
    )
  }
}


