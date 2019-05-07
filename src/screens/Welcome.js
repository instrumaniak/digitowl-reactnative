/**
 *  Welcome screen shown when the user first opens the app
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native'

import {
  Button,
  Text
} from 'native-base'

import { themeColors } from '../config'

const Welcome = ({ navigation }) => (
  <View style={{flex: 1, backgroundColor: themeColors.brand }}>
    <StatusBar backgroundColor={ themeColors.brandDarken } />
    <View style={styles.titleContainer}>
      <Text style={styles.logoTitle}>DigitOwl</Text>
      <Text style={styles.logoSubTitle}>Expense tracker</Text>
    </View>
    <View style={styles.btnContainer}>
      <Button block light onPress={() => navigation.navigate('Login', {type: 'register'})}>
        <Text style={{color: themeColors.brand }} uppercase={false}>New to DigitOwl</Text>
      </Button>
      <Button block bordered light onPress={() => navigation.navigate('Login', {type: 'login'})}>
        <Text style={{color: 'white'}} uppercase={false}>Already using DigitOwl</Text>
      </Button>
    </View>
  </View>
)

Welcome.propTypes = {
  navigation: PropTypes.any
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTitle: {
    fontSize: 35,
    marginBottom: 5,
    color: 'white'
  },
  logoSubTitle: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white'
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10
  }
})

export default Welcome
