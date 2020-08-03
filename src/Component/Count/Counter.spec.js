import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  }
  const component = shallow(
    <Counter value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    mark: component.find('mark')
  }
}

describe('Counter component', () => {

  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('second button should call onDecrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })

})
