/**
 *   Tests for Login component
 */

import React from 'react'
import Login from './Login'
import renderer from 'react-test-renderer'

describe('Login Screen', () => {
  it('Renders correctly', () => {
    // mock react navigation
    const navigation = {
      navigate: jest.fn(),
      getParam: jest.fn()
    }

    const tree = renderer.create(
      <Login navigation={navigation}/>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
