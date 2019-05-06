/**
 *   Tests for component: CardPlaces
 */

import React from 'react'
import CardPlaces from './CardPlaces'
import renderer from 'react-test-renderer'

describe('CardPlaces component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<CardPlaces />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
