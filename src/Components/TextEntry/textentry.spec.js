import React from 'react'
import { TextEntry } from './TextEntry'
import { shallow } from 'enzyme' // helps us render components to visual DOM
import { findByTestAttr } from '../../tests/utils/findByTestAttr'
import { faUser } from '@fortawesome/free-regular-svg-icons'

describe('TextEntry Unit Tests', () => {
  describe('Default values: No props provided', () => {
    let wrapper, inputComponent
    beforeEach(() => {
      wrapper = shallow(<TextEntry />)
      inputComponent = findByTestAttr(wrapper, 'text-entry-input')
    })

    it('should not have a label component', () => {
      const labelComponent = findByTestAttr(wrapper, 'text-entry-label')
      expect(labelComponent.exists()).toEqual(false)
    })

    it('should not have an icon component', () => {
      const iconComponent = findByTestAttr(wrapper, 'text-entry-icon-container')
      expect(iconComponent.exists()).toEqual(false)
    })

    it('should not have a help text component', () => {
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.exists()).toEqual(false)
    })

    test('input component should have className="text-entry__input"', () => {
      expect(inputComponent.hasClass('text-entry__input')).toEqual(true)
    })

    test('input component className prop should be length of 1', () => {
      const classesArray = inputComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(1)
    })

    test('input component should have placeholder=undefined', () => {
      expect(inputComponent.prop('placeholder')).toEqual(undefined)
    })

    test('input component should have disabled=false', () => {
      expect(inputComponent.prop('disabled')).toEqual(false)
    })
  })

  describe('helpText prop tests', () => {
    it('should be able to find help text paragraph element with only helpText prop provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.text()).toEqual('abc')
    })

    it('should display an error text if ONLY errorHelpText prop provided', () => {
      const wrapper = shallow(<TextEntry errorHelpText="xyz" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.text()).toEqual('xyz')
    })

    it('should still display an error text if both errorHelpText & helpText are provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.text()).toEqual('xyz')
    })

    it('should have className --error modifier when only errorHelpText provided', () => {
      const wrapper = shallow(<TextEntry errorHelpText="xyz" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.hasClass('text-entry__help-text--error')).toEqual(true)
    })

    it('should have className --error modifier when both errorHelpText & helpText provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.hasClass('text-entry__help-text')).toEqual(true)
      expect(helpTextComponent.hasClass('text-entry__help-text--error')).toEqual(true)
    })

    it('should have a total of 2 class names', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      const classNamesArray = helpTextComponent.prop('className').split(' ')
      expect(classNamesArray.length).toEqual(2)
    })
  })

  describe('icon prop tests', () => {
    let wrapper, inputComponent

    beforeEach(() => {
      wrapper = shallow(<TextEntry icon={faUser} />)
      inputComponent = findByTestAttr(wrapper, 'text-entry-input')
    })

    it('should display an icon if an icon prop is provided', () => {
      const iconComponent = findByTestAttr(wrapper, 'text-entry-icon-container')
      expect(iconComponent.exists()).toEqual(true)
    })

    test('input element should have className="text-entry__signup" to ensure border-radius', () => {
      expect(inputComponent.hasClass('text-entry__signup')).toEqual(true)
    })

    test('input element should a total of 2 classes', () => {
      const classesArray = inputComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })
  })

  describe('isDisabled prop tests', () => {
    it('should have --disabled modifier on input', () => {
      const wrapper = shallow(<TextEntry isDisabled={true} />)
      const inputComponent = findByTestAttr(wrapper, 'text-entry-input')
      expect(inputComponent.hasClass('text-entry__input--disabled')).toEqual(true)
    })

    test('input should have a total of 2 classes', () => {
      const wrapper = shallow(<TextEntry isDisabled={true} />)
      const inputComponent = findByTestAttr(wrapper, 'text-entry-input')
      const classesArray = inputComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })

    it('should have --disabled modifier on icon', () => {
      const wrapper = shallow(<TextEntry icon={faUser} isDisabled={true} />)
      const iconComponent = findByTestAttr(wrapper, 'text-entry-icon-container')
      expect(iconComponent.hasClass('text-entry__icon-container--disabled')).toEqual(true)
    })

    test('icon should have a total of 2 classes', () => {
      const wrapper = shallow(<TextEntry icon={faUser} isDisabled={true} />)
      const iconComponent = findByTestAttr(wrapper, 'text-entry-icon-container')
      const classesArray = iconComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })

    it('should have --disabled modifier on help text', () => {
      const wrapper = shallow(<TextEntry helpText="abc" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.hasClass('text-entry__help-text--disabled')).toEqual(true)
    })

    test('help text should have a total of 2 classes', () => {
      const wrapper = shallow(<TextEntry helpText="abc" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      const classesArray = helpTextComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })

    it('should have --disabled modifier on label', () => {
      const wrapper = shallow(<TextEntry label="This is a label" isDisabled={true} />)
      const labelComponent = findByTestAttr(wrapper, 'text-entry-label')
      expect(labelComponent.hasClass('text-entry__label--disabled')).toEqual(true)
    })

    test('label should have a total of 2 classes', () => {
      const wrapper = shallow(<TextEntry label="This is a label" isDisabled={true} />)
      const labelComponent = findByTestAttr(wrapper, 'text-entry-label')
      const classesArray = labelComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })

    test('help text should NOT have --error modifier if both disabled and errorHelpText props provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.hasClass('text-entry__help-text--error')).toEqual(false)
    })

    test('help text SHOULD HAVE --disabled if both disabled and errorHelpText props provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.hasClass('text-entry__help-text--disabled')).toEqual(true)
    })

    test('help text should NOT exist if errorHelpText provided & helpText not provided', () => {
      const wrapper = shallow(<TextEntry errorHelpText="xyz" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      expect(helpTextComponent.exists()).toEqual(false)
    })

    test('help text component should have a total of 2 classes when there is both errorHelpText & isDisabled provided', () => {
      const wrapper = shallow(<TextEntry helpText="abc" errorHelpText="xyz" isDisabled={true} />)
      const helpTextComponent = findByTestAttr(wrapper, 'text-entry-help-text')
      const classesArray = helpTextComponent.prop('className').split(' ')
      expect(classesArray.length).toEqual(2)
    })
  })

  describe('Label prop tests', () => {
    test("label element's value should be the value given to it", () => {
      const wrapper = shallow(<TextEntry label="some label" />)
      const labelComponent = findByTestAttr(wrapper, 'text-entry-label')
      expect(labelComponent.text()).toEqual('some label')
    })
  })

  describe('placeholder prop tests', () => {
    test("input element's placeholder attribute should no longer be undefined", () => {
      const wrapper = shallow(<TextEntry placeholder="placeholder text" />)
      const inputComponent = findByTestAttr(wrapper, 'text-entry-input')
      expect(inputComponent.prop('placeholder')).toBeDefined()
    })

    test("input element's placeholder attribute should equal the text given to it", () => {
      const wrapper = shallow(<TextEntry placeholder="placeholder text" />)
      const inputComponent = findByTestAttr(wrapper, 'text-entry-input')
      expect(inputComponent.prop('placeholder')).toEqual('placeholder text')
    })
  })

  describe('focus and blur tests', () => {
    test(`input element should have className with --active modifier if
          internal function handleFocus is called`, () => {
      const wrapper = shallow(<TextEntry />)
      const inputComponentBeforeFocus = findByTestAttr(wrapper, 'text-entry-input')
      inputComponentBeforeFocus.prop('onFocus')()
      wrapper.update()
      const inputComponentAfterFocus = findByTestAttr(wrapper, 'text-entry-input')
      expect(inputComponentAfterFocus.hasClass('text-entry__input--active')).toEqual(true)
    })

    it('should add --active modifier after handleFocus, then remove after handleBlur', () => {
      const wrapper = shallow(<TextEntry />)
      const inputComponentBeforeFocus = findByTestAttr(wrapper, 'text-entry-input')
      inputComponentBeforeFocus.prop('onFocus')()
      wrapper.update()
      const inputComponentAfterFocus = findByTestAttr(wrapper, 'text-entry-input')
      inputComponentAfterFocus.prop('onBlur')()
      wrapper.update()
      const inputComponentAfterBlur = findByTestAttr(wrapper, 'text-entry-input')
      expect(inputComponentAfterBlur.hasClass('text-entry__input--active')).toEqual(false)
    })

    describe('focus and blur with icons provided', () => {
      it('should add --active modifier on both icon & input', () => {
        const wrapper = shallow(<TextEntry icon={faUser} />)
        const inputComponentBeforeFocus = findByTestAttr(wrapper, 'text-entry-input')
        inputComponentBeforeFocus.prop('onFocus')()
        wrapper.update()
        const inputComponentAfterFocus = findByTestAttr(wrapper, 'text-entry-input')
        const iconComponentAfterFocus = findByTestAttr(wrapper, 'text-entry-icon-container')
        expect(inputComponentAfterFocus.hasClass('text-entry__input--active')).toEqual(true)
        expect(iconComponentAfterFocus.hasClass('text-entry__icon-container--active')).toEqual(true)
      })

      it('should add, then remove --active on icon & input', () => {
        const wrapper = shallow(<TextEntry icon={faUser} />)
        const inputComponentBeforeFocus = findByTestAttr(wrapper, 'text-entry-input')
        inputComponentBeforeFocus.prop('onFocus')()
        wrapper.update()
        const inputComponentAfterFocus = findByTestAttr(wrapper, 'text-entry-input')
        inputComponentAfterFocus.prop('onBlur')()
        wrapper.update()
        const inputComponentAfterBlur = findByTestAttr(wrapper, 'text-entry-input')
        const iconComponentAfterBlur = findByTestAttr(wrapper, 'text-entry-icon-container')

        expect(inputComponentAfterBlur.hasClass('text-entry__input--active')).toEqual(false)
        expect(iconComponentAfterBlur.hasClass('text-entry__icon-container--active')).toEqual(false)
      })
    })
  })
})
