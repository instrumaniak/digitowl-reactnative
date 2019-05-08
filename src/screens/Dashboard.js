import React from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  Container,
  Tabs,
  Tab,
  Header,
  Body,
  Right,
  Title,
  Icon,
  Button,
  ScrollableTab
} from 'native-base'

import { human } from 'react-native-typography'
import Dash from '../components/Dashboard'
import { colors, themeColors } from '../config'

const Dashboard = () => (
  <Container>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: themeColors.brand }} androidStatusBarColor={themeColors.brandDarken}>
      <Body><Title style={ human.title3White }>Dashboard</Title></Body>
      <Right>
        <Button transparent>
          <Icon name='ios-folder-open' />
        </Button>
        <Button transparent>
          <Icon name='calendar' />
        </Button>
        <Button transparent>
          <Icon name='search' />
        </Button>
      </Right>
    </Header>
    <Tabs renderTabBar={()=><ScrollableTab style={{ backgroundColor: themeColors.brand }}/>}>
      <Tab
        style={{ backgroundColor: colors.whiteSmoke }}
        heading='April 2019'
        tabStyle={{ backgroundColor: themeColors.brand}}
        activeTabStyle={{ backgroundColor: themeColors.brand}}
        textStyle={{ color: colors.whiteSmoke }}
      >
        <Dash />
      </Tab>
      <Tab
        heading='May 2019'
        tabStyle={{ backgroundColor: themeColors.brand}}
        activeTabStyle={{ backgroundColor: themeColors.brand}}
        textStyle={{ color: colors.whiteSmoke }}
      />
      <Tab
        heading='June 2019'
        style={{ backgroundColor: colors.whiteSmoke }}
        tabStyle={{ backgroundColor: themeColors.brand}}
        activeTabStyle={{ backgroundColor: themeColors.brand}}
        textStyle={{ color: colors.whiteSmoke }}
      />
    </Tabs>
  </Container>
)

export default Dashboard
