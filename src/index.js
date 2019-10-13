import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './scss/styles.scss'
import { TextEntry } from './Components/TextEntry/TextEntry'
import { faUser } from '@fortawesome/free-regular-svg-icons'

ReactDOM.render(
  <div>
    <h1>General Forms</h1>
    <TextEntry
      label="Normal"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      isSignup={false}
      isDisabled={false}
      hasError={false}
    />
    <TextEntry
      label="Disabled"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      isSignup={false}
      isDisabled={true}
      hasError={false}
    />
    <TextEntry
      label="Error"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      isSignup={false}
      isDisabled={false}
      hasError={true}
    />
    <h1>Signup Forms</h1>
    <TextEntry
      label="Normal"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      isSignup={true}
      isDisabled={false}
      hasError={false}
    />
    <TextEntry
      label="Disabled"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      isSignup={true}
      isDisabled={true}
      hasError={false}
    />
    <TextEntry
      label="Error"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      isSignup={true}
      isDisabled={false}
      hasError={true}
    />
  </div>,
  document.getElementById('root')
)
