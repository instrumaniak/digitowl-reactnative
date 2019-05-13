/**
 *   Floating Circle button
 *   used in Dashboard
 *   for create new entry
 */

import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'native-base'
import { colors, themeColors } from '../config'

const CircleButton = ({ navigation }) => (
  <TouchableOpacity
    style={ styles.container }
    onPress={() => navigation.navigate('Create')}>
      <Icon name='md-add' style={{
        fontSize: 30,
        color: colors.whiteSmoke
      }} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: themeColors.brandLighten,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    position: 'absolute',
    bottom: 10,
    right: 15
  }
})

export default withNavigation(CircleButton)
