/**
 *   Tests for Welcome component
 */

import React from 'react'
import Welcome from './Welcome'
import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<Welcome />).toJSON()
  expect(tree).toMatchSnapshot()
})
