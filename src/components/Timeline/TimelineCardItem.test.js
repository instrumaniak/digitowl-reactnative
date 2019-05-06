/**
 *   Tests for component: TimelineCardItem
 */

import React from 'react'
import TimelineCardItem from './TimelineCardItem'
import renderer from 'react-test-renderer'

describe('TimelineCardItem Component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<TimelineCardItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
