import React from 'react'
import PropTypes from 'prop-types'
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
    if (this.props.onBlur) this.props.onBlur()
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
    if (this.props.onFocus) this.props.onFocus()
  }

  render() {
    const { errorHelpText, handleInputChange, helpText, icon, isDisabled, label, placeholder, type, value } = this.props
    const { isFocused } = this.state
    const statusText = (errorHelpText && !isDisabled ? errorHelpText : helpText) || '.'
    const componentClassName = classNames('text-entry', this.props.className)
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
      'text-entry__help-text--hidden': !helpText && !errorHelpText,
      'text-entry__help-text--error': errorHelpText && !isDisabled,
      'text-entry__help-text--disabled': isDisabled,
    })
    const labelClassName = classNames({
      'text-entry__label': true,
      'text-entry__label--disabled': isDisabled,
    })

    return (
      <div className={componentClassName}>
        {label && (
          <h3 data-testid="text-entry-label" className={labelClassName}>
            {label}
          </h3>
        )}
        <div className="text-entry__input-container">
          {/* {icon && (
            <div data-testid="text-entry-icon-container" className={iconClassName}>
              <FontAwesomeIcon icon={icon} />
            </div>
          )} */}
          {icon && (
            <div data-testid="text-entry-icon-container" className={iconClassName}>
              <i className="material-icons">{icon}</i>
            </div>
          )}
          <input
            data-testid="text-entry-input"
            className={inputClassName}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            type={type}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={(e) => handleInputChange(e.target.value)}
            value={value}
          />
        </div>
        <p data-testid="text-entry-help-text" className={helpTextClassName}>
          {statusText}
        </p>
      </div>
    )
  }
}

TextEntry.propTypes = {
  errorHelpText: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  helpText: PropTypes.string,
  // icon: PropTypes.exact({
  //   prefix: PropTypes.oneOf(['fas', 'fab', 'far', 'fal', 'fad']),
  //   iconName: PropTypes.string,
  //   icon: PropTypes.array,
  // }),
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
}

TextEntry.defaultProps = {
  isDisabled: false,
  type: 'text',
}
