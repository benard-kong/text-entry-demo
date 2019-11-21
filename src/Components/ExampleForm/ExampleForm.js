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
    if (!EmailValidator.validate(email)) emailErrorMessage = 'Please type a valid email'
    setErrors((errors) => ({ ...errors, emailErrorMessage }))
  }

  const validatePassword = () => {
    let passwordErrorMessage = ''
    const alphaExp = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    if (!password.match(alphaExp))
      passwordErrorMessage = 'Passwords need to be greater than 8 characters, with at least 1 special character'
    setErrors((errors) => ({ ...errors, passwordErrorMessage }))
  }

  const validateConfirmPassword = () => {
    let confirmPasswordErrorMessage = ''
    if (password !== confirmPassword) confirmPasswordErrorMessage = 'The two passwords must match!'
    setErrors((errors) => ({ ...errors, confirmPasswordErrorMessage }))
  }

  return (
    <div>
      <form action="">
        <h1>Example Text Entries for Signing Up</h1>
        <h2>Try typing "Disable Me" without the quotes to disable the text boxes!</h2>
        <TextEntry
          errorHelpText={errors.emailErrorMessage}
          handleInputChange={(text) => setEmail(text)}
          helpText="eg. john-smith@abc.com"
          icon="mail_outline"
          isDisabled={disableEmail}
          onBlur={validateEmail}
          placeholder="Email"
          type="email"
          value={email}
        />
        <TextEntry
          errorHelpText={errors.passwordErrorMessage}
          handleInputChange={(text) => setPassword(text)}
          icon="lock_outline"
          isDisabled={disablePassword}
          onBlur={validatePassword}
          placeholder="Password"
          type="password"
          value={password}
        />
        <TextEntry
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
