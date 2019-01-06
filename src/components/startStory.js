import React, { Component } from 'react'
import { threeLines } from '../lib/openingLines'

export default class startStory extends Component {
  render() {
    return( 
      <div>
      <h2>CHOOSE AN OPENING LINE</h2>
      <p>{threeLines[0]}</p>
      <br/>
      <p>{threeLines[1]}</p>
      <br/>
      <p>{threeLines[2]}</p>
      <br/>
      </div>)
  }
}
