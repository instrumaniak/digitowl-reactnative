/**
 *   Tests for component: Activity
 */

import React from 'react'
import Activity from './Activity'
import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<Activity />).toJSON()
  expect(tree).toMatchSnapshot()
})
