import React from 'react'

import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  Card,
  CardItem,
  Text,
  Button
} from 'native-base'


import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import { colors } from '../config'
import CircleButton from './CircleButton'


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

const Dashboard = () => (
  <View style={styles.container}>
    <ScrollView>

      {/* Wallets & Account */}
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Wallets & Accounts</Text>
        </CardItem>
        <CardItem>
          <View style={styles.btnContainer}>
            <Button style={styles.btnLight} light>
              <Text style={styles.btnText} uppercase={false}>Add Cash Wallet </Text>
            </Button>
            <Button style={styles.btnLight} light>
              <Text style={styles.btnText} uppercase={false}>Connect Bank </Text>
            </Button>
          </View>
        </CardItem>
      </Card>

      {/* Overview */}
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
              svg={{ fill: colors.grey1 }}
            />
            <View style={{ flex: 1}}>
              <LineChart
                data={data}
                style={{ height: 200 }}
                svg={{stroke: colors.grey1, strokeOpacity: 0.6, strokeWidth: 3 }}
                contentInset={{ top: 10, bottom: 10 }}
              >
                <Decorator />
                <Grid svg={{strokeOpacity: 1, stroke: colors.grey}}/>
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: 30}}
                data={data}
                contentInset={{ left: 10, right: 10 }}
                formatLabel={(value, index) => index}
                svg={{ fill: colors.grey1 }}
              />
            </View>
          </View>
        </CardItem>
      </Card>
    </ScrollView>
    <CircleButton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1
  },
  cardHeaderText: {
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
    color: colors.greenDark
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
    color: colors.grey1,
    marginBottom: 5,
    fontSize: 18
  },
  obtnValue: {
    color: colors.grey2,
    fontSize: 25
  }
})

export default Dashboard
