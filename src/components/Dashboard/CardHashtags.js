/**
 *   Dashboard: Hashtags section
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


class CardHashtags extends PureComponent {
  render() {
    return (
      <Card style={{ elevation: 2 }}>
        <CardItem>
          <Text style={styles.cardHeaderText}>Hashtags</Text>
        </CardItem>

      {/* Category Item list */}
        <CardItem>
          <CategoryItem
            iconText="#"
            title="#Business"
            description="26 transations"
            value="-1 804.90 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="#"
            title="#Lunch"
            description="17 transactions"
            value="-694.20 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="#"
            title="#Personal"
            description="1 transactions"
            value="-555.40 USD"
          />
        </CardItem>
        <CardItem>
          <CategoryItem
            iconText="#"
            title="#Entertainment"
            description="5 transations"
            value="-462.80 USD"
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
            }}>All hashtags (12)</Text>
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
  }
})

export default CardHashtags
