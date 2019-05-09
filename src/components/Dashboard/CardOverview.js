/**
 *   Dashboard section: Overview
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import {
  Card,
  CardItem,
  Text
} from 'native-base'

import {
  LineChart,
  XAxis,
  YAxis,
  Grid
} from 'react-native-svg-charts'

import { human } from 'react-native-typography'
import { Circle } from 'react-native-svg'
import { colors } from '../../config'

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

const Decorator = ({ x, y, data }) => {
  return data.map(( value, index) => (
    <Circle
      key={index}
      cx={ x(index) }
      cy={ y(value)}
      r={ 4 }
      stroke={ colors.grey }
      strokeWidth={3}
      fill={colors.whiteSmoke}
    />
  ))
}

class CardOverview extends PureComponent {
  render() {
    return (
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Overview</Text>
        </CardItem>
        <CardItem>
          <View style={styles.btnContainer}>
            <View style={[styles.overviewButton, styles.oBtnActive]}>
              <Text style={styles.obtnHeading}>Total Wealth</Text>
              <Text style={styles.obtnValue}>+34 628 USD</Text>
            </View>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Monthly Cash Flow</Text>
              <Text style={styles.obtnValue}>+257 USD</Text>
            </View>
          </View>
        </CardItem>

        {/* Charts */}
        <CardItem>
          <View style={{ flexDirection: 'row'}}>
            <YAxis
              data={data}
              style={{ marginBottom: 30, marginRight: 10 }}
              contentInset={{ top: 10, bottom: 10 }}
              svg={{
                ...human.caption2Object,
                fill: colors.grey1,
              }}
            />
            <View style={{ flex: 1}}>
              <LineChart
                data={data}
                style={{ height: 200 }}
                svg={{stroke: colors.grey1, strokeOpacity: 0.6, strokeWidth: 3 }}
                contentInset={{ top: 10, bottom: 10 }}
              >
                <Decorator />
                <Grid svg={{strokeOpacity: 0.5, stroke: colors.grey}}/>
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: 30}}
                data={data}
                contentInset={{ left: 10, right: 10 }}
                formatLabel={(value, index) => index}
                svg={{ ...human.caption2Object, fill: colors.grey1 }}
              />
            </View>
          </View>
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
