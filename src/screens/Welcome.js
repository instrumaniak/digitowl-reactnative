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
import Swiper from 'react-native-swiper'

import { colors, themeColors } from '../config'

const Welcome = ({ navigation }) => (
  <View style={{flex: 1, backgroundColor: themeColors.brand }}>
    <StatusBar backgroundColor={ themeColors.brandDarken } />
    <View style={{flex: 5}}>
      <Swiper
        dot={<View style={styles.dot}/>}
        activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slides}>
          <Text style={styles.logoTitle}>DigitOwl</Text>
          <Text style={styles.logoSubTitle}>Expense tracker</Text>
        </View>
        <View style={styles.slides}>
          <Text style={styles.logoTitle}>Your Finance</Text>
          <Text style={styles.logoSubTitle}>in your control</Text>
        </View>
        <View style={styles.slides}>
          <Text style={styles.logoTitle}>Your Budget</Text>
          <Text style={styles.logoSubTitle}>in your control</Text>
        </View>
        <View style={styles.slides}>
          <Text style={styles.logoTitle}>Your Money</Text>
          <Text style={styles.logoSubTitle}>in your control</Text>
        </View>
      </Swiper>
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
    padding: 10,

  },
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    backgroundColor: themeColors.brandLighten,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5
  },
  activeDot: {
    backgroundColor: colors.grey1,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5
  }
})

export default Welcome
