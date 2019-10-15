import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export class TextEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      hasError: false,
      errorHelpText: undefined,
    }
  }

  handleBlur = (e) => {
    this.setState({ isFocused: false })
    const { checkError } = this.props
    if (typeof checkError === 'function') {
      const input = e.target.value
      const { hasError, errorHelpText } = checkError(input)
      this.setState({ hasError, errorHelpText })
    }
  }

  handleFocus = () => this.setState({ isFocused: true })

  render() {
    const { label, placeholder, icon, isDisabled } = this.props
    const { isFocused, hasError, errorHelpText } = this.state
    let { helpText } = this.props
    if (hasError && errorHelpText) helpText = errorHelpText
    const inputClassName = classNames({
      'text-entry__input': true,
      'text-entry__signup': !icon,
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
      <div data-testid="component-wrapper" className="text-entry">
        {label && <h3 className={labelClassName}>{label}</h3>}
        <div className="text-entry__input-container">
          {icon && (
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
  placeholder: PropTypes.string,
  icon: PropTypes.exact({
    prefix: PropTypes.oneOf(['fas', 'fab', 'far', 'fal', 'fad']),
    iconName: PropTypes.string,
    icon: PropTypes.array,
  }),
  isDisabled: PropTypes.bool,
  checkError: PropTypes.func,
}

TextEntry.defaultProps = {
  isDisabled: false,
  checkError: () => ({ hasError: false }),
}
