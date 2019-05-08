/**
 *   Card component used in Activity screen
 */

import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Icon
} from 'native-base'

import { human } from 'react-native-typography'
import { colors } from '../config'

const ActivityCard = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ante vitae tortor vulputate, at posuere ante lacinia.</Text>
      <Text style={styles.time}>3 min. ago, 1:45 PM</Text>
    </View>

    <View style={styles.iconContainer}>
      <Icon name='ios-arrow-forward' style={styles.icon}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 2,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 15,
    paddingLeft: 2
  },
  text: {
    ...human.bodyObject,
    color: colors.grey1,
    marginBottom: 10
  },
  time: {
    ...human.subheadObject,
    color: colors.grey,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1
  },
  icon: {
    color: colors.grey
  }
})

export default ActivityCard
