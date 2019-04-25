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
  Body,
  Left,
  Right,
  Button
} from 'native-base'

import { colors } from '../config'
import CircleButton from './CircleButton'

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
