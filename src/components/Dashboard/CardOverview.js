/**
 *   Dashboard section: Overview
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import {
  Card,
  CardItem,
  Text
} from 'native-base'

import { human } from 'react-native-typography'
import { colors } from '../../config'
import LineChart from './Charts/LineChart'

class CardOverview extends PureComponent {
  state = {
    activeChart: 'line' // line / bar
  }
  toogleActiveChart = (src) => {
    if( src == 'line' || src == 'bar') {
      this.setState({ activeChart: src })
    }
  }
  render() {
    const { activeChart } = this.state

    return (
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Overview</Text>
        </CardItem>
        <CardItem>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => this.toogleActiveChart('line')}
              style={[ styles.overviewButton, activeChart == 'line' ? styles.oBtnActive : {}]}>
              <View>
                <Text style={styles.obtnHeading}>Total Wealth</Text>
                <Text style={styles.obtnValue}>+34 628 USD</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toogleActiveChart('bar')}
              style={[ styles.overviewButton, activeChart == 'bar' ? styles.oBtnActive : {}]}>
              <View>
                <Text style={styles.obtnHeading}>Monthly Cash Flow</Text>
                <Text style={styles.obtnValue}>+257 USD</Text>
              </View>
            </TouchableOpacity>
          </View>
        </CardItem>

        {/* Charts */}
        <CardItem>
          { activeChart == 'line' ? <LineChart /> : <View /> }
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  cardHeaderText: {
    ...human.headlineObject,
    color: colors.grey2
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
    ...human.bodyObject,
    color: colors.grey1,
    marginBottom: 5,
  },
  obtnValue: {
    ...human.title3Object,
    color: colors.grey2,
  }
})

export default CardOverview
