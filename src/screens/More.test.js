/**
 *   Tests for component: More
 */

import React from 'react'
import More from './More'
import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<More />).toJSON()
  expect(tree).toMatchSnapshot()
})
