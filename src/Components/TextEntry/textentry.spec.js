import React from 'react'
import { TextEntry } from './TextEntry'
import { shallow } from 'enzyme' // helps us render components to visual DOM

describe('Category of tests', () => {
  let some_var
  beforeEach(() => {
    some_var = 'some var is reassigned to this value before every test'
  })

  //it
  // jest not recognizing?
  it('should have correct class when component isDisabled', () => {
    const wrapper = shallow(<TextEntry />)
    const componentWrapper = wrapper.find('[data-testid="component-wrapper"]')
    expect(componentWrapper.hasClass('text-entry')).toEqual(true)
    console.log(componentWrapper.debug())
  })

  // test('has correct class when component isDisabled')
})
