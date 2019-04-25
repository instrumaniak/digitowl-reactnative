import React from 'react'

//import { View, FlatList } from 'react-native'

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
    <Header hasTabs style={{ elevation:2, paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
      <Body><Title>Activity</Title></Body>
    </Header>
    <Content removeClippedSubviews={true} contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10, paddingTop: 5}}>
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </Content>
  </Container>
)

// const Activity = () => (
//   <View style={{ backgroundColor: colors.whiteSmoke, flex: 1 }}>
//     <Header hasTabs style={{ elevation:2, paddingLeft: 20, backgroundColor: colors.green }} androidStatusBarColor={colors.greenDark}>
//       <Body><Title>Activity</Title></Body>
//     </Header>
//     <View style={{marginBottom: 40, paddingHorizontal: 10, paddingBottom: 10, paddingTop: 5}}>
//       <FlatList
//         data={new Array(10).fill().map((x,i) => i)}
//         keyExtractor={(item, index) => `${index}`}
//         renderItem={() => <ActivityCard />}
//       />
//     </View>
//   </View>
// )

export default Activity
