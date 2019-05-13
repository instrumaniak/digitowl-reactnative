/**
 *   Create new entry form
 */

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { human } from 'react-native-typography'
import { colors } from '../config'
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Form,
  Picker,
  Button,
  Item,
  Input,
  DatePicker
} from 'native-base'

class CreateNew extends PureComponent {
  render() {
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
                note
                mode="dropdown"
                itemTextStyle={{
                  color: colors.red
                }}
              >
                <Picker.Item label="Expense" value="key0" />
                <Picker.Item label="Income" value="key1" />
                <Picker.Item label="Transfer" value="key2" />
              </Picker>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Enter Amount</Text>
              <Item><Input value="0" /></Item>
            </View>

            <View style={styles.itemContainer}>
              <Text style={styles.headline}>Select Date</Text>
              <DatePicker defaultDate={new Date()} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button block style={{ backgroundColor: colors.blue, marginBottom: 5 }}>
              <Text>Save</Text>
            </Button>
            <Button block style={{ backgroundColor: colors.grey1 }}>
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
  }
})

export default CreateNew
