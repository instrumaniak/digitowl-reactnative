/**
 *   Create new entry form
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet, Picker, TextInput } from 'react-native'
import { human } from 'react-native-typography'
import { colors } from '../config'
import {
  Container,
  Content,
  Text,
  Button,
  Input,
  DatePicker
} from 'native-base'

class CreateNew extends PureComponent {
  render() {
    const { navigation } = this.props

    return (
      <Container>
        <Content padder>
        <View style={{
          justifyContent: 'space-between'
        }}>
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Select Category</Text>
              <Picker
                style={{ color: colors.grey1 }}
              >
                <Picker.Item label="Expense" value="key0" />
                <Picker.Item label="Income" value="key1" />
                <Picker.Item label="Transfer" value="key2" />
              </Picker>
            </View>
            <View style={styles.itemContainer}>
              <Text>Select Payment method</Text>
              <Picker
                style={{ color: colors.grey1 }}
              >
                <Picker.Item label="Cash" value="cash" style={{ color: colors.blue }}/>
                <Picker.Item label="Card" value="card"/>
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Enter Amount</Text>
              <TextInput style={styles.inputBox} value="0" />
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Select Date</Text>
              <DatePicker defaultDate={new Date()} />
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Notes</Text>
              <TextInput multiline style={styles.inputBox}/>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button block style={{ backgroundColor: colors.blue, marginBottom: 5 }}>
              <Text>Save</Text>
            </Button>
            <Button onPress={()=> navigation.goBack()} block style={{ backgroundColor: colors.grey1 }}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headline: {
    ...human.headlineObject,
    color: colors.grey2
  },
  buttonContainer: {
    marginTop: 20
  },
  itemContainer: {
    marginBottom: 10
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey
  }
})

export default CreateNew
