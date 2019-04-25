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

import Dash from '../components/Dashboard'
import { colors } from '../config'

const Dashboard = () => (
  <Container>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
      <Body><Title>Dashboard</Title></Body>
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
    <Tabs renderTabBar={()=><ScrollableTab style={{ backgroundColor: colors.green }}/>}>
      <Tab
        style={{ backgroundColor: colors.whiteSmoke }}
        heading='April 2019'
        tabStyle={{ backgroundColor: colors.green}}
        activeTabStyle={{ backgroundColor: colors.green}}
        textStyle={{ color: colors.whiteSmoke }}
      >
        <Dash />
      </Tab>
      <Tab
        heading='May 2019'
        tabStyle={{ backgroundColor: colors.green}}
        activeTabStyle={{ backgroundColor: colors.green}}
        textStyle={{ color: colors.whiteSmoke }}
      />
      <Tab
        heading='June 2019'
        style={{ backgroundColor: colors.whiteSmoke }}
        tabStyle={{ backgroundColor: colors.green}}
        activeTabStyle={{ backgroundColor: colors.green}}
        textStyle={{ color: colors.whiteSmoke }}
      />
    </Tabs>
  </Container>
)

export default Dashboard
