/**
 *   Dashboard: Categories section
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line, Text as SText } from 'react-native-svg'

import {
  Card,
  CardItem,
  Text
} from 'native-base'

import { human } from 'react-native-typography'
import { colors } from '../../config'
import CategoryItem from './CategoryItem'

const data2 = [ 50, 53, 24, 5, 20, 80 ]

const pieData = data2
  .filter(value => value > 0)
  .map((value, index) => ({
    value,
    svg: {
      fill: colors.grey1
    },
    key: `pie-${index}`
  }))

const PieLabels = ({ slices }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice
    return (
      <G key={index}>
        <Line
          x1={ labelCentroid[0] }
          y1={ labelCentroid[1] }
          x2={ pieCentroid[0] }
          y2={ pieCentroid[1] }
          stroke={ data.svg.fill }
        />
        <Circle
          cx={ labelCentroid[0] }
          cy={ labelCentroid[1] }
          r={ 20 }
          fill={ colors.grey }
        />
        <SText
          x={ labelCentroid[0] - 7 }
          y={ labelCentroid[1] + 5 }
          style={{ ...human.caption2Object }}
          stroke={ colors.grey2 }
        >
          { data.value} %
        </SText>
      </G>
    )
  })
}

class CardCategories extends PureComponent {
  render() {
    return (
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Categories</Text>
        </CardItem>
        <CardItem>
          <View style={styles.btnContainer}>
            <View style={[styles.overviewButton, styles.oBtnActive]}>
              <Text style={styles.obtnHeading}>Total Expenses</Text>
              <Text style={styles.obtnValue}>- 4 628 USD</Text>
            </View>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Total Income</Text>
              <Text style={styles.obtnValue}>+ 5 884 USD</Text>
            </View>
          </View>
        </CardItem>

      {/* Chart */}
        <CardItem>
          <PieChart
            style={{ flex:1, height: 250 }}
            data={pieData}
            innerRadius={30}
            outerRadius={60}
            labelRadius={90}
          >
            <PieLabels />
          </PieChart>
        </CardItem>

      {/* Category Item list */}
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Food and Drink"
            description="26 transations"
            value="-1 804.90 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Travel"
            description="17 transactions"
            value="-694.20 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Rent"
            description="1 transactions"
            value="-555.40 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Entertainment"
            description="5 transations"
            value="-462.80 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Energy"
            description="6 transactions"
            value="-450.50 USD"
          />
        </CardItem>

        <CardItem>
          <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
            <Text style={{
              ...human.subheadObject,
              color: colors.grey1,
              textDecorationLine: 'underline'
            }}>All Categories (7)</Text>
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
    marginBottom: 5
  },
  obtnValue: {
    ...human.title3Object,
    color: colors.grey2
  }
})

export default CardCategories
