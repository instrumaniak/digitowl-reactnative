/**
 *   Login/Register screen
 */

import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet
} from 'react-native'

import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
  Content,
  Button,
  Text,
  Icon,
  Form,
  Item,
  Input
} from 'native-base'

import { colors } from '../config'

const Login = ({ navigation }) => {
  const type = navigation.getParam('type', '')
  const buttonText = type == 'register' ? 'Signup' : 'Login'
  return (
    <Container>
      <Content padder>
        <View style={{paddingBottom: 0}}>
          <Form style={{ marginBottom: 20}}>
            <Item>
              <Icon name='md-mail' style={styles.icons}/>
              <Input placeholder='Email' />
            </Item>
            <Item>
              <Icon name='md-lock' style={styles.icons}/>
              <Input placeholder='Password' secureTextEntry/>
            </Item>
          </Form>
          <Button block style={{backgroundColor: colors.greenDark}}>
            <Text>Continue</Text>
          </Button>
        </View>

        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.dash} />
            <Text style={styles.textOr}>or</Text>
            <View style={styles.dash} />
          </View>
          <Button iconLeft block>
            <Icon name='logo-facebook' style={styles.icons}/>
            <Text uppercase={false}>{buttonText} with Facebook</Text>
          </Button>
          <Button block iconLeft light style={{ marginTop: 15 }}>
            <Icon name='logo-google' style={styles.icons}/>
            <Text uppercase={false}>  {buttonText} with Google   </Text>{/* Space for alignment */}
          </Button>
        </View>

        <View style={{marginTop: 180}}>
          <Text style={styles.notice}>By using DigitOwl you agree with DigitOwl{"'"}s {' '}
            <Text style={styles.link} onPress={() => alert('Terms')}>terms of use</Text> & {' '}
            <Text style={styles.link} onPress={() => alert('Privacy')}>privacy policy</Text>.</Text>
        </View>
      </Content>
    </Container>
  )
}

// Header
Login.navigationOptions = ({ navigation }) => ({
  header: (
    <Header androidStatusBarColor={colors.greenDark} style={{ backgroundColor: colors.green}}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>{ navigation.getParam('type') == 'register' ? 'Create account' : 'Login'}</Title>
      </Body>
      <Right />
    </Header>
  )
})

Login.propTypes = {
  navigation: PropTypes.any
}

const styles = StyleSheet.create({
  icons: {
    color: colors.grey
  },
  textOr: {
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  notice: {
    padding: 10,
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.grey
  },
  link: {
    fontSize: 14,
    color: colors.grey,
    textDecorationLine: 'underline'
  },
  dash: {
    height: 1,
    width: 100,
    backgroundColor: colors.grey
  }
})

export default Login
