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

import More from '../components/More'
import { colors, themeColors } from '../config'
import { human } from 'react-native-typography'

const MoreScreen = () => (
  <Container style={{ backgroundColor: colors.whiteSmoke }}>
    <Header hasTabs style={{ paddingLeft: 20, backgroundColor: themeColors.brand }} androidStatusBarColor={themeColors.brandDarken}>
      <Body><Title style={ human.title3White }>More</Title></Body>
      <Right>
        <Button transparent>
          <Icon name='ios-log-out' />
        </Button>
      </Right>
    </Header>
    <More />
  </Container>
)

export default MoreScreen
