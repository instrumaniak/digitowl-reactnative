/**
 *   Main Navigation
 */

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'

import { BottomTabStack } from './BottomTabStack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'


import { themeColors } from '../config'

// For performance
import { useScreens } from 'react-native-screens'
useScreens()

// Initial Authentication screens
const AuthStack = createStackNavigator({
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



const AppStack = createStackNavigator({
  TabContainer: BottomTabStack
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: themeColors.brand,
    }
  }
})

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
))

export default AppContainer
