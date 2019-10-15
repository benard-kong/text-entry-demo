export const emailHasError = (input) => {
  /*
    Returns an object {hasError, helpText}
    if valid email: {hasError: false, helpText: undefined}
    if not valid email: {hasError: true, helpText: 'Please input a valid email address'}
  */
  const re = /^[a-zA-Z]+.*@.+\.[a-zA-Z]+$/
  if (re.test(input)) {
    return {
      hasError: false,
    }
  } else {
    return {
      hasError: true,
      errorHelpText: 'Please input a valid email address',
    }
  }
}
