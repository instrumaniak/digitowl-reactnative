/**
 *   Tests for component: CardCategories
 */

import React from 'react'
import CardCategories from './CardCategories'
import renderer from 'react-test-renderer'

describe('CardCategories component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<CardCategories />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
