import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
