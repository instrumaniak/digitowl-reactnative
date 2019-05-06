/**
 *   Tests for screen: Timeline
 */

import React from 'react'
import Timeline from './Timeline'
import renderer from 'react-test-renderer'

describe('Timeline Screen', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Timeline />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
