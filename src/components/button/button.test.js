'use strict'

import React from 'react'
import Button from './index'
import renderer from 'react-test-renderer'

it('Should Button to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null}>Click me</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>Success</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>Danger</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

