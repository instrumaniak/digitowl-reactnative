/**
 *   Navigation
 */

import React from 'react'

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import { Icon } from 'native-base'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
//import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import Timeline from '../screens/Timeline'
import Activity from '../screens/Activity'
import More from '../screens/More'

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

// Main screens with bottom tabs
const bottomTabStack = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-stats' style={{color: tintColor}}/>
      }
    })
  },
  Timeline: {
    screen: Timeline,
    navigationOptions: () => ({
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='md-list-box' style={{color: tintColor}}/>
      }
    })
  },
  Activity: {
    screen: Activity,
    navigationOptions: () => ({
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-notifications' style={{color: tintColor}}/>
      }
    })
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-more' style={{color: tintColor}}/>
      }
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: themeColors.brandDarken,
    style: {
      //backgroundColor: '#eee',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 5,
      paddingBottom: 2
    }
  },
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]

    return {
      headerTitle: routeName,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      },
      header: null
    }
  }
})

const AppStack = createStackNavigator({
  TabContainer: bottomTabStack
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
