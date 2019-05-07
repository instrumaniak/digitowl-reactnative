/**
 *   Floating Circle button
 *   used in Dashboard
 */

import React from 'react'
import { View } from 'react-native'
import { Icon } from 'native-base'
import { colors, themeColors } from '../config'

const CircleButton = () => (
  <View style={{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: themeColors.brandLighten,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    position: 'absolute',
    bottom: 10,
    right: 10
  }}>
    <Icon name='md-add' style={{
      fontSize: 30,
      color: colors.whiteSmoke
    }} />
  </View>
)

export default CircleButton
