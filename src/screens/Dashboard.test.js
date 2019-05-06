/**
 *   Tests for Screen: Dashboard
 */
import React from 'react'
import Dashboard from './Dashboard'
import renderer from 'react-test-renderer'

describe('Dashboard Screen', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
