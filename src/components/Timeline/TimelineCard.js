import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  Card,
  CardItem
} from 'native-base'

import { human } from 'react-native-typography'
import { colors } from '../../config'
//import TimelineCardItem from './TimelineCardItem'
import CategoryItem from '../Dashboard/CategoryItem'

class TimelineCard extends PureComponent {
  render() {
    return (
      <Card>
        <CardItem>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sat, April 17 2019</Text>
            <Text style={styles.headerText}>+1 800 USD</Text>
          </View>
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Extra Income"
            value="+ 2000 USD"
            description="Visa Platinum"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Other"
            value="- 200 USD"
            description="Master Card"
          />
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    ...human.headlineObject,
    color: colors.grey2
    // fontSize: 16,
    // fontWeight: 'bold'
  }
})

export default TimelineCard
