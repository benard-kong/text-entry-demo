import React, { useState, useEffect } from 'react'
import { TextEntry } from 'Components/TextEntry/TextEntry'
import * as EmailValidator from 'email-validator'

const ExampleForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    emailErrorMessage: '',
    passwordErrorMessage: '',
    confirmPasswordErrorMessage: '',
  })

  const [disableEmail, setDisableEmail] = useState(false)
  const [disablePassword, setDisablePassword] = useState(false)
  const [disableConfirmPassword, setDisableConfirmPassword] = useState(false)

  useEffect(() => {
    if (email.toLowerCase() === 'disable me') setDisableEmail(true)
  }, [email])

  useEffect(() => {
    if (password.toLowerCase() === 'disable me') setDisablePassword(true)
  }, [password])

  useEffect(() => {
    if (confirmPassword.toLowerCase() === 'disable me') setDisableConfirmPassword(true)
  }, [confirmPassword])

  const validateEmail = () => {
    let emailErrorMessage = ''
    if (!EmailValidator.validate(email))
      emailErrorMessage = 'Please type a valid email; Click in text box to make this error disappear'
    setErrors((errors) => ({ ...errors, emailErrorMessage }))
  }

  const clearEmailErrors = () => {
    setErrors((errors) => ({ ...errors, emailErrorMessage: '' }))
  }

  const validatePassword = () => {
    let passwordErrorMessage = ''
    const alphaExp = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    if (!password.match(alphaExp))
      passwordErrorMessage =
        'Passwords need to be greater than 8 characters, with at least 1 special character; Must complete conditions to make this error disappear'
    setErrors((errors) => ({ ...errors, passwordErrorMessage }))
  }

  const validateConfirmPassword = () => {
    let confirmPasswordErrorMessage = ''
    if (password !== confirmPassword)
      confirmPasswordErrorMessage =
        'The two passwords must match! Must complete conditions to make this error disappear'
    setErrors((errors) => ({ ...errors, confirmPasswordErrorMessage }))
  }

  return (
    <div>
      <form className="example-form">
        <h1 className="example-form__title">Example Text Entries Components</h1>
        <div className="example-form__instruction-flex-container">
          <div className="example-form__instructions-container">
            <h2 className="example-form__instruction">List of things you can do:</h2>
            <div className="example-form__todo-list-container">
              <ul className="example-form__todo-list">
                <li className="example-form__todo-item">
                  You can change the size of your window, and the text boxes change their widths accordingly.
                </li>
                <li className="example-form__todo-item">
                  Try typing "Disable Me" without the quotes to disable the text boxes. Disable conditions can be
                  customized easily.
                </li>
                <li className="example-form__todo-item">
                  Click inside a text box and its borders will turn blue, indicating to the user they can begin typing.
                </li>
                <li className="example-form__todo-item">
                  Make an error and the text box's borders will turn red, error messages are easily customizable as
                  well.
                </li>
                <li className="example-form__todo-item">
                  Easily change behavior for when the error disappears. Compare Email error clearing and Password error
                  clearing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TextEntry
          className="example-form__text-entry"
          errorHelpText={errors.emailErrorMessage}
          handleInputChange={(text) => setEmail(text)}
          helpText="eg. john-smith@abc.com"
          icon="mail_outline"
          isDisabled={disableEmail}
          onBlur={validateEmail}
          onFocus={clearEmailErrors}
          placeholder="Email"
          type="email"
          value={email}
        />
        <TextEntry
          className="example-form__text-entry"
          errorHelpText={errors.passwordErrorMessage}
          handleInputChange={(text) => setPassword(text)}
          icon="lock_outline"
          isDisabled={disablePassword}
          label="These labels are optional and can be set easily. Notice the other two text boxes do not have labels."
          onBlur={validatePassword}
          placeholder="Password"
          type="password"
          value={password}
        />
        <TextEntry
          className="example-form__text-entry"
          errorHelpText={errors.confirmPasswordErrorMessage}
          handleInputChange={(text) => setConfirmPassword(text)}
          icon="lock_outline"
          isDisabled={disableConfirmPassword}
          onBlur={validateConfirmPassword}
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
        />
      </form>
    </div>
  )
}

export default ExampleForm
