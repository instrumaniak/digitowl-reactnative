import React from 'react'
import MoreCardItem from './MoreCardItem'
import renderer from 'react-test-renderer'

test('Renders correctly', () => {
  const tree = renderer.create(<MoreCardItem />).toJSON()
  expect(tree).toMatchSnapshot()
})
