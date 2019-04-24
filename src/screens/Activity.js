import React from 'react'

import {
  Container,
  Content,
  Header,
  Body,
  Title
} from 'native-base'

import ActivityCard from '../components/ActivityCard'
import { colors } from '../config'

const Activity = () => (
  <Container style={{ backgroundColor: colors.whiteSmoke }}>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
      <Body><Title>Activity</Title></Body>
    </Header>
    <Content contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10, paddingTop: 5}}>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </Content>
  </Container>
)

export default Activity
