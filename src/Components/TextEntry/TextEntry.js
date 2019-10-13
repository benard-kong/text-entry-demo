import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core/index.d.ts'
import classNames from 'classnames'

export class TextEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
    }
  }

  handleBlur = () => this.setState({ isFocused: false })

  handleFocus = () => this.setState({ isFocused: true })

  render() {
    const { label, helpText, placeholder, isSignup, icon, isDisabled, hasError } = this.props
    const { isFocused } = this.state
    const inputClassName = classNames({
      'text-entry__input': true,
      'text-entry__signup': isSignup,
      'text-entry__input--active': isFocused,
      'text-entry__input--error': hasError,
      'text-entry__input--disabled': isDisabled,
    })
    const iconClassName = classNames({
      'text-entry__icon-container': true,
      'text-entry__icon-container--active': isFocused,
      'text-entry__icon-container--error': hasError,
      'text-entry__icon-container--disabled': isDisabled,
    })
    const helpTextClassName = classNames({
      'text-entry__help-text': true,
      'text-entry__help-text--error': hasError,
      'text-entry__help-text--disabled': isDisabled,
    })
    const labelClassName = classNames({
      'text-entry__label': true,
      'text-entry__label--disabled': isDisabled,
    })

    return (
      <div className="text-entry">
        {label && <h3 className={labelClassName}>{label}</h3>}
        <div className="text-entry__input-container">
          {isSignup && (
            <div className={iconClassName}>
              <FontAwesomeIcon icon={icon} />
            </div>
          )}
          <input
            className={inputClassName}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            type="text"
            placeholder={placeholder}
            disabled={isDisabled}
          />
        </div>
        {helpText && <p className={helpTextClassName}>{helpText}</p>}
      </div>
    )
  }
}

TextEntry.propTypes = {
  label: PropTypes.string,
  helpText: PropTypes.string,
  // icon: PropTypes.instanceOf(IconDefinition),
  placeholder: PropTypes.string,
  isSignup: PropTypes.bool.isRequired,
  // icon: PropTypes.oneOf([faUser]),
  icon: (props, propName) => {
    if (props.isSignup && props[propName] === undefined) {
      console.log('typeof(props[propName]): ', typeof props[propName] != 'function')
      return new Error('Please provide an icon prop!')
    } else if (!props.isSignup && props[propName] !== undefined) {
      return new Error('Do not provide an icon prop if isSignup is false!')
    } // TODO: Now icon is not required to be oneOf([faUser])
  },
  isDisabled: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired, // If isDisabled is true, this must be false
}
