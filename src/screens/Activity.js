import React from 'react'
// import {
//   View,
//   Text
// } from 'react-native'

import {
  Container,
  Header,
  Body,
  Title
} from 'native-base'

import { colors } from '../config'

const Activity = () => (
  <Container style={{ backgroundColor: colors.whiteSmoke }}>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
      <Body><Title>Activity</Title></Body>
    </Header>

  </Container>
)

export default Activity
