import React from 'react'
import { TextEntry } from '../TextEntry/TextEntry'
import { faUser } from '@fortawesome/free-regular-svg-icons'

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
    return (
      <div>
        <h1>General Forms</h1>
        <TextEntry
          label="Normal"
          helpText=""
          placeholder="some text"
          handleInputChange={(val) =>
            this.setState({
              generalFormsNormal: val,
            })
          }
          value={this.state.generalFormsNormal}
        />
        <TextEntry
          label="Password"
          helpText=""
          placeholder="Password"
          type="password"
          handleInputChange={(val) =>
            this.setState({
              generalFormsPassword: val,
            })
          }
          value={this.state.generalFormsPassword}
        />
        <TextEntry
          label="Disabled"
          helpText="Help Text (if necessary)"
          placeholder="some text"
          isDisabled={true}
          handleInputChange={(val) =>
            this.setState({
              generalFormsDisabled: val,
            })
          }
          value={this.state.generalFormsDisabled}
        />
        <TextEntry
          label="Error"
          helpText="Help Text (if necessary)"
          placeholder="some text"
          errorHelpText="There is an error"
          handleInputChange={(val) =>
            this.setState({
              generalFormsError: val,
            })
          }
          value={this.state.generalFormsError}
        />

        <h1>Signup Forms</h1>
        <TextEntry
          label="Normal"
          helpText="eg. john-smith@abc.com"
          placeholder="some text"
          icon={faUser}
          handleInputChange={(val) =>
            this.setState({
              signupFormsNormal: val,
            })
          }
          value={this.state.signupFormsNormal}
        />
        <TextEntry
          label="Disabled"
          helpText="Help Text (if necessary)"
          placeholder="some text"
          icon={faUser}
          isDisabled={true}
          handleInputChange={(val) =>
            this.setState({
              signupFormsDisabled: val,
            })
          }
          value={this.state.signupFormsDisabled}
        />
        <TextEntry
          label="Error"
          helpText="Help Text (if necessary)"
          placeholder="some text"
          icon={faUser}
          errorHelpText="There is an Error"
          handleInputChange={(val) =>
            this.setState({
              signupFormsError: val,
            })
          }
          value={this.state.signupFormsError}
        />
      </div>
    )
  }
}
