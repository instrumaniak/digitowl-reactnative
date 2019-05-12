import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { human } from 'react-native-typography'
import { colors } from '../../../config'

const data = [ 40, 50, -10, 60, 90, -60]

class _BarChart extends PureComponent {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <YAxis
          data={data}
          style={{ marginBottom: 30, marginRight: 5 }}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            ...human.caption2Object,
            fill: colors.grey1,
          }}
        />
        <View style={{ flex: 1 }}>
          <BarChart
            style={{ height: 250 }}
            data={data}
            svg={{ fill: colors.grey }}
            contentInset={{ top: 10, bottom: 10}}
          >
            <Grid svg={{strokeOpacity: 0.5, stroke: colors.grey}} />
          </BarChart>
          <XAxis
            style={{ marginHorizontal: -10, height: 30}}
            data={data}
            contentInset={{ left: 30, right: 30 }}
            formatLabel={(value, index) => index + 1}
            svg={{ ...human.caption2Object, fill: colors.grey1 }}
          />
        </View>
      </View>
    )
  }
}

export default _BarChart
