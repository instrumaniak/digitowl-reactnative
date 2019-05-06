/**
 *   Tests for component: CircleButton
 */

import React from 'react'
import CircleButton from './CircleButton'

import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<CircleButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
