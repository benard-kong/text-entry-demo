import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export class TextEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
    }
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleFocus = () => this.setState({ isFocused: true })

  render() {
    const { label, placeholder, icon, isDisabled, errorHelpText } = this.props
    const { isFocused } = this.state
    let { helpText } = this.props
    if (errorHelpText && !isDisabled) helpText = errorHelpText
    const inputClassName = classNames({
      'text-entry__input': true,
      'text-entry__signup': !!icon,
      'text-entry__input--active': isFocused,
      'text-entry__input--error': errorHelpText && !isDisabled,
      'text-entry__input--disabled': isDisabled,
    })
    const iconClassName = classNames({
      'text-entry__icon-container': true,
      'text-entry__icon-container--active': isFocused,
      'text-entry__icon-container--error': errorHelpText && !isDisabled,
      'text-entry__icon-container--disabled': isDisabled,
    })
    const helpTextClassName = classNames({
      'text-entry__help-text': true,
      'text-entry__help-text--error': errorHelpText && !isDisabled,
      'text-entry__help-text--disabled': isDisabled,
    })
    const labelClassName = classNames({
      'text-entry__label': true,
      'text-entry__label--disabled': isDisabled,
    })

    return (
      <div className="text-entry">
        {label && (
          <h3 data-testid="text-entry-label" className={labelClassName}>
            {label}
          </h3>
        )}
        <div className="text-entry__input-container">
          {icon && (
            <div data-testid="text-entry-icon-container" className={iconClassName}>
              <FontAwesomeIcon icon={icon} />
            </div>
          )}
          <input
            data-testid="text-entry-input"
            className={inputClassName}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            type="text"
            placeholder={placeholder}
            disabled={isDisabled}
          />
        </div>
        {helpText && (
          <p data-testid="text-entry-help-text" className={helpTextClassName}>
            {helpText}
          </p>
        )}
      </div>
    )
  }
}

TextEntry.propTypes = {
  errorHelpText: PropTypes.string,
  helpText: PropTypes.string,
  icon: PropTypes.exact({
    prefix: PropTypes.oneOf(['fas', 'fab', 'far', 'fal', 'fad']),
    iconName: PropTypes.string,
    icon: PropTypes.array,
  }),
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

TextEntry.defaultProps = {
  errorHelpText: undefined, // Don't pass '' or it will render an errorHelpText
  helpText: undefined, // Don't pass '' or it will render a helpText
  isDisabled: false,
  label: undefined, // Don't pass '' or it will render a label element
}
