import React from 'react'
import ExampleForm from 'Components/ExampleForm/ExampleForm'

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      generalFormsNormal: '',
      generalFormsPassword: '',
      generalFormsDisabled: '',
      generalFormsError: '',
      signupFormsNormal: '',
      signupFormsDisabled: '',
      signupFormsError: '',
    }
  }

  render() {
    return <ExampleForm />
  }
}
