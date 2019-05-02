import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import {AUTH_TOKEN} from '../../constants'

export default class LandingPage extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="App-header">
      <h1>My Storylines</h1>
          {authToken ? (
              <>
              Welcome!
              <button onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN)
                  this.props.history.push(`/`)
                }} >
                Logout  </button><br/>
              <iframe className="gif" title="linesgif" src="https://giphy.com/embed/3o7qDNfxtNRtLVv8qs" width="480" height="270" frameBorder="0" allowFullScreen></iframe>    
                <Link to={`/start`}>Add to others</Link>
                    or
                <Link to={`/`}>Create your own</Link><br/>
               </>) : (<>
                <iframe className="gif" title="linesgif" src="https://giphy.com/embed/3o7qDNfxtNRtLVv8qs" width="480" height="270" frameBorder="0" allowFullScreen></iframe><br/>
              <h3>
              <Link to="/userportal" className="ml1 no-underline black">
                Make your own storylines
              </Link></h3></>              
            )
          }   
      </div>
    )
  }
}
