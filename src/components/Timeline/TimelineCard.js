import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  Card,
  CardItem
} from 'native-base'

import TimelineCardItem from './TimelineCardItem'

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
          <TimelineCardItem
            iconText="$"
            title="Extra Income"
            value="+ 2000 USD"
            description="Visa Platinum"
          />
        </CardItem>
        <CardItem>
          <TimelineCardItem
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
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default TimelineCard
