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

import { human } from 'react-native-typography'
import { colors } from '../../config'

import CircleButton from '../CircleButton'
import CardOverview from './CardOverview'
import CardCategories from './CardCategories'
import CardHashtags from './CardHashtags'
import CardPlaces from './CardPlaces'

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

      <CardOverview />

      <Card style={{ elevation: 2 }}>
        <CardItem>
          <View style={styles.btnContainer}>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Average Daily Expense</Text>
              <Text style={styles.obtnValue}>- 28.47 USD</Text>
            </View>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Last Month Comparison</Text>
              <Text style={styles.obtnValue}>+22%</Text>
            </View>
          </View>
        </CardItem>
      </Card>

      <CardCategories />

      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Transfers</Text>
        </CardItem>
        <CardItem>
          <View style={styles.btnContainer}>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Outgoing</Text>
              <Text style={styles.obtnValue}>- 125 USD</Text>
            </View>
            <View style={styles.overviewButton}>
              <Text style={styles.obtnHeading}>Incoming</Text>
              <Text style={styles.obtnValue}>+1 200 USD</Text>
            </View>
          </View>
        </CardItem>
      </Card>

      <CardHashtags />
      <CardPlaces />
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
  btnText: {
    ...human.bodyObject,
    color: colors.grey1
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
    color: colors.grey1,
    marginBottom: 5
  },
  obtnValue: {
    ...human.title3Object,
    color: colors.grey2
  }
})

export default Dashboard
