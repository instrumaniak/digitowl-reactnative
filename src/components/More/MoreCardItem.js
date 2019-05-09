import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Icon } from 'native-base'
import { colors } from '../../config'
import { human } from 'react-native-typography'

const MoreCardItem = ({
  iconText,
  title,
  description
}) => (
  <View style={styles.container}>
    { iconText &&
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{iconText}</Text>
      </View>
    }
    <View style={styles.dataContainer}>
      <View>
        <Text style={styles.title}>{ title }</Text>
        { description && <Text style={styles.description}>{ description }</Text>}
      </View>
      <View>
        <Icon name='ios-arrow-forward' style={styles.icon}/>
      </View>
    </View>
  </View>
)

MoreCardItem.propTypes = {
  iconText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
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
    fontSize: 35
  },
  icon: {
    color: colors.grey
  },
  dataContainer: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  // typography
  title: {
    ...human.bodyObject,
    color: colors.grey1,
  },
  description: {
    ...human.subheadObject,
    color: colors.grey
  }
})

export default MoreCardItem
