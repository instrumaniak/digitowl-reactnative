/**
 *   Tests for component: CategoryItem
 */

import React from 'react'
import CategoryItem from './CategoryItem'
import renderer from 'react-test-renderer'

describe('CategoryItem component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<CategoryItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
