import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { colors } from '../../config'

const CategoryItem = ({
  iconText,
  title,
  description,
  value
}) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{iconText}</Text>
    </View>
    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.description}>{ description }</Text>
      </View>
      <View>
        <Text style={styles.value}>{ value }</Text>
      </View>
    </View>
  </View>
)

CategoryItem.propTypes = {
  iconText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.grey,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconText: {
    color: colors.white,
    //fontWeight: 'bold',
    fontSize: 35
  },
  dataContainer: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  // typography
  title: {
    color: colors.grey1,
    fontSize: 20,
    //fontWeight: 'bold'
  },
  description: {
    color: colors.grey,
    fontSize: 16
  },
  value: {
    color: colors.grey1,
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default CategoryItem
