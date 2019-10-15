import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './scss/styles.scss'
import { TextEntry } from './Components/TextEntry/TextEntry'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { emailHasError } from './utils/email-checker'

ReactDOM.render(
  <div>
    <h1>General Forms</h1>
    <TextEntry label="Normal" helpText="Help Text (if necessary)" placeholder="some text" />
    <TextEntry label="Disabled" helpText="Help Text (if necessary)" placeholder="some text" isDisabled={true} />

    <h1>Signup Forms</h1>
    <TextEntry
      label="Email"
      helpText="eg. john-smith@abc.com"
      placeholder="some text"
      icon={faUser}
      checkError={emailHasError}
    />
    <TextEntry
      label="Disabled"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      isDisabled={true}
    />
  </div>,
  document.getElementById('root')
)
