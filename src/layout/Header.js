import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>
            MY STORYLINES
        </h1>
        <iframe title="linesgif" src="https://giphy.com/embed/3o7qDNfxtNRtLVv8qs" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <h3>Make up your own story or add to someone else's</h3>
          <Link to={`/start`}><a href="/start" class="new-start">Start my own</a></Link>
      </div>
    )
  }
}
