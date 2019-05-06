/**
 *   Tests for component: CardOverview
 */

import React from 'react'
import CardOverview from './CardOverview'
import renderer from 'react-test-renderer'

describe('CardOverview component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<CardOverview />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
