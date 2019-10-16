import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './scss/styles.scss'
import { TextEntry } from './Components/TextEntry/TextEntry'
import { faUser } from '@fortawesome/free-regular-svg-icons'

ReactDOM.render(
  <div>
    <h1>General Forms</h1>
    <TextEntry label="Normal" helpText="" placeholder="some text" />
    <TextEntry label="Password" helpText="" placeholder="Password" type="password" />
    <TextEntry label="Disabled" helpText="Help Text (if necessary)" placeholder="some text" isDisabled={true} />
    <TextEntry
      label="Error"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      errorHelpText="There is an error"
    />

    <h1>Signup Forms</h1>
    <TextEntry label="Normal" helpText="eg. john-smith@abc.com" placeholder="some text" icon={faUser} />
    <TextEntry
      label="Disabled"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      isDisabled={true}
    />
    <TextEntry
      label="Error"
      helpText="Help Text (if necessary)"
      placeholder="some text"
      icon={faUser}
      errorHelpText="There is an Error"
    />
  </div>,
  document.getElementById('root')
)
