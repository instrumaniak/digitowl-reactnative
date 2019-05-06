/**
 *   Tests for component: ActivityCard
 */

import React from 'react'
import ActivityCard from './ActivityCard'

import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<ActivityCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
