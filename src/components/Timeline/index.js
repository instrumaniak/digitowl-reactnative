import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  Card,
  CardItem
} from 'native-base'

import { human } from 'react-native-typography'
import { colors } from '../../config'
import TimelineCard from './TimelineCard'

class Timeline extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card style={{ elevation: 2 }}>
            <CardItem>
              <View style={styles.btnContainer}>
                <View style={styles.overviewButton}>
                  <Text style={styles.obtnHeading}>Total Wealth</Text>
                  <Text style={styles.obtnValue}>-14 628 USD</Text>
                </View>
                <View style={styles.overviewButton}>
                  <Text style={styles.obtnHeading}>Monthly Cash Flow</Text>
                  <Text style={styles.obtnValue}>+25 700 USD</Text>
                </View>
              </View>
            </CardItem>
          </Card>

          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1
  },
  cardHeaderText: {
    //fontSize: 20,
    color: colors.grey1
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  btnLight: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center'
  },
  btnText: {
    //color: colors.greenDark
  },
  overviewButton: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  oBtnActive: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 5
  },
  obtnHeading: {
    ...human.subheadObject,
    color: colors.grey1
  },
  obtnValue: {
    ...human.title3Object,
    color: colors.grey2
  }
})

export default Timeline
