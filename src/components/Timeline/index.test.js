/**
 *   Tests for component: Timeline
 */

import React from 'react'
import Timeline from './'
import renderer from 'react-test-renderer'

describe('Timeline component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Timeline />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
