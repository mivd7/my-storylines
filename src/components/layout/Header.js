import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import {AUTH_TOKEN} from '../../constants'

export default class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="App-header">
        <h1>
            MY STORYLINES
        </h1>
          {authToken ? (
              <button onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/`)
                }} >
                Logout
              </button> ) : (
              <button>
              <Link to="/login" className="ml1 no-underline black">
                login
              </Link> 
              </button>)}   
        <iframe className="gif" title="linesgif" src="https://giphy.com/embed/3o7qDNfxtNRtLVv8qs" width="480" height="270" frameBorder="0" allowFullScreen></iframe>
          <h3>Make up your own story or add to someone else's</h3>
          <Link to={`/start`}>Start my own</Link>
      </div>
    )
  }
}
