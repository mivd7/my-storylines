import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import { Mutation } from "react-apollo"
import { CREATE_STORY } from '../actions/mutations'

export default class CreateStory extends Component {
  state = {
    title: '',
    openingLine: ''
  }

  render() {
    const { openingLine, title } = this.state
    //user ID naar create story component als prop?
    const dummyUser = "cjv75kcoy005m0780v0426s82"
    return (
      <div>
        <div className="flex flex-column">
        <h1>Once upon a time...</h1>
        <p>There was a title</p>
          <input
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
          /><br/>
        <p>...and an opening line</p>
          <input
            value={openingLine}
            onChange={e => this.setState({ openingLine: e.target.value })}
            type="text"
          />
          <br/>
        </div>
          <Mutation mutation={CREATE_STORY}
                    variables={{ title, openingLine, userId: dummyUser }} >
            {storyMutation => <div><button onClick={storyMutation}>Submit</button></div>}
          </Mutation>
      </div>
    )
  }
}
