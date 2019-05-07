/**
 *   Dashboard: Places section
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import {
  Card,
  CardItem,
  Text
} from 'native-base'

import { colors } from '../../config'
import CategoryItem from './CategoryItem'


class CardPlaces extends PureComponent {
  render() {
    return (
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Places</Text>
        </CardItem>

      {/* Category Item list */}
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Office"
            description="26 transations"
            value="-1 804.90 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Home"
            description="17 transactions"
            value="-694.20 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="$"
            title="Cafe"
            description="1 transactions"
            value="-155.40 USD"
          />
        </CardItem>

        <CardItem>
          <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
            <Text style={{
              color: colors.grey1,
              textDecorationLine: 'underline'
            }}>All places (9)</Text>
          </View>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
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
    color: colors.grey1,
    marginBottom: 5,
    fontSize: 15
  },
  obtnValue: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default CardPlaces
