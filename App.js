import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import AppContainer from './src/navigation'

import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

// Disable some warnings
YellowBox.ignoreWarnings([
  'Warning: Async Storage'
])

const navigationPersistenceKey = null
//const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null // eslint-disable-line

// Just for dev: react-navigation state persistance is enabled
export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <AppContainer persistenceKey={navigationPersistenceKey} />
      </StyleProvider>
    )
  }
}
