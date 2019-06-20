/**
 *  Bottom Tab Navigation
 */

import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { colors, themeColors } from '../config'
import { Icon } from 'native-base'

import Dashboard from '../screens/Dashboard'
import Timeline from '../screens/Timeline'
import Activity from '../screens/Activity'
import More from '../screens/More'
import CreateNew from '../screens/CreateNew'


const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  Create: {
    screen: CreateNew,
    navigationOptions: {
      title: 'Create new entry',
      headerStyle: {
        backgroundColor: themeColors.brand
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      }

    }
  }
})

// Main screens with bottom tabs
export const BottomTabStack = createBottomTabNavigator({
  DashboardStack: {
    screen: DashboardStack,
    navigationOptions: () => ({
      tabBarLabel: 'Dashboard',
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-stats' style={{color: tintColor}}/>
      }
    })
  },
  Timeline: {
    screen: Timeline,
    navigationOptions: () => ({
      tabBarLabel: 'Timeline',
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='md-list-box' style={{color: tintColor}}/>
      }
    })
  },
  Activity: {
    screen: Activity,
    navigationOptions: () => ({
      tabBarLabel: 'Activity',
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-notifications' style={{color: tintColor}}/>
      }
    })
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarLabel: 'More',
      tabBarIcon({ tintColor }){ //eslint-disable-line react/prop-types
        return <Icon name='ios-more' style={{color: tintColor}}/>
      }
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: colors.white,
    inactiveTintColor: colors.grey1,
    //activeBackgroundColor: themeColors.brandDarken,
    inactiveBackgroundColor: themeColors.brandDarken,
    style: {
      backgroundColor: themeColors.brand,
      borderTopWidth: 2,
      borderTopColor: themeColors.backgroundDarken,
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
