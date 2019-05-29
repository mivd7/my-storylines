import React, { Component } from 'react'
import { AUTH_TOKEN } from '../../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        name
      }
    }
  }
`

export default class UserPortal extends Component {
  state = {
    login: false, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  handleError(error) {
    const errorMessage = error.split(':')
                              .slice(-1)[0]
    return window.alert(errorMessage)
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <div>
       {login ? 
          <><iframe title="spongebob" src="https://giphy.com/embed/kCHmQ4YBBO2Zi" width="360" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <h4>Login</h4></> : <>
                  <iframe title="simpson" src="https://giphy.com/embed/3o6Mbp8RPCrhrrFB6M" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                  <h4>Signup</h4></>
        }        
        <div className="flex flex-column">
          {!login && (
            <>
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            /><br/>
            </>
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          /><br/>
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          /><br/>
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
            onError={e => this.handleError(e.toString())}
          >
            {mutation => (
              <button className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </button>
            )}
          </Mutation>
          <button
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? 'signup?' : 'login?'}
          </button>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}