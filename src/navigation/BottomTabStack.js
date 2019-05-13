/**
 *  Bottom Tab Navigation
 */

import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { colors, themeColors } from '../config'
import { Icon } from 'native-base'

import Dashboard from '../screens/Dashboard'
import Timeline from '../screens/Timeline'
import Activity from '../screens/Activity'
import More from '../screens/More'

// Main screens with bottom tabs
export const BottomTabStack = createBottomTabNavigator({
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
    //inactiveTintColor: colors.grey1,
    //activeBackgroundColor: colors.whiteSmoke,
    inactiveBackgroundColor: colors.whiteSmoke,
    style: {
      //backgroundColor: colors.white,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      //paddingTop: 5,
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
