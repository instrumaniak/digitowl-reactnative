/**
 *   Tests for component: TimelineCard
 */

import React from 'react'
import Dashboard from './'
import renderer from 'react-test-renderer'

describe('Dashboard component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
