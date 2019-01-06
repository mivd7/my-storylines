import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { threeLines } from '../lib/openingLines'

export default class startStory extends Component {
  handleClick(){
    window.location.reload()
  }

  render() {
    return( 
      <div>
        <h2>CHOOSE AN OPENING LINE</h2>
          <iframe title="7dwarfs" src="https://giphy.com/embed/AOqKdtVvmMAI8" width="360" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>{threeLines[0]}</p>
          <br/>
        <p>{threeLines[1]}</p>
          <br/>
        <p>{threeLines[2]}</p>
          <br/>
        <button onClick={this.handleClick}>I don't like these, gimme new ones!</button>
        <Link to={`/`}><button>Take me back</button></Link>
      </div>)
  }
}
