'use strict'

import React from 'react'
import Button from './index'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import renderer from 'react-test-renderer'

const noop = () => null

configure({ adapter: new Adapter() })

it('Should Button to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop}>Click me</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='success'>Success</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button danger to match snapshot', () => {
  const tree = renderer.create(
    <Button onClick={noop} kind='danger'>Danger</Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button with prop kind = "success" should has class "-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='success'>Button Success</Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
})

it('Should Button with prop kind = "danger" should has class "-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='danger'>Button Danger</Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
})


