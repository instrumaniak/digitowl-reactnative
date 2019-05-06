/**
 *   Tests for component: CardHashtags
 */

import React from 'react'
import CardHashtags from './CardHashtags'
import renderer from 'react-test-renderer'

describe('CardHashtags component', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<CardHashtags />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
