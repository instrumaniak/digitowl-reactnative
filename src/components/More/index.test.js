import React from 'react'
import Dashboard from './'
import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<Dashboard />).toJSON()
  expect(tree).toMatchSnapshot()
})
