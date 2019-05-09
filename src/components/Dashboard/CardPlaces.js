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

import { human } from 'react-native-typography'
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
              ...human.subheadObject,
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
    ...human.headlineObject,
    color: colors.grey1
  }
})

export default CardPlaces
