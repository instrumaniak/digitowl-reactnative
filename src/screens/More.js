import React from 'react'
// import {
//   View,
//   Text
// } from 'react-native'

import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Icon,
  Button
} from 'native-base'

import { colors } from '../config'

const More = () => (
  <Container style={{ backgroundColor: colors.whiteSmoke }}>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
      <Body><Title>More</Title></Body>
      <Right>
        <Button transparent>
          <Icon name='ios-log-out' />
        </Button>
      </Right>
    </Header>
  </Container>
)

export default More
