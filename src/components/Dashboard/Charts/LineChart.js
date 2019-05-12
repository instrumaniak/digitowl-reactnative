import React, { PureComponent } from 'react'
import { View } from 'react-native'

import {
  LineChart,
  XAxis,
  YAxis,
  Grid
} from 'react-native-svg-charts'

import { colors } from '../../../config'
import { human } from 'react-native-typography'
import { Circle } from 'react-native-svg'

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

class _LineChart extends PureComponent {
  render() {
    return (
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
            style={{ height: 250 }}
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
    )
  }
}

export default _LineChart
