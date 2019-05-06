/**
 *   Tests for component: TimelineCard
 */

import React from 'react'
import TimelineCard from './TimelineCard'
import renderer from 'react-test-renderer'

describe('TimelineCard component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<TimelineCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
