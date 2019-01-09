import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { Mutation } from "react-apollo"
import { ADD_TO_STORY } from '../actions/mutations'

export default class AddOpeningLine extends Component {
  state = {
    text: ''
  }
  render() {
    const { text } = this.state
    return (
      <div>
        <div className="flex flex-column">
          <input
            value={text}
            onChange={e => this.setState({ text: e.target.value })}
            placeholder="Add Your Line"
          />
        </div>
          <Mutation mutation={ADD_TO_STORY}
                    variables={{ text, storyId: `${this.props.storyId}` }} >
            {addMutation => <div><button onClick={addMutation}>Submit</button></div>}
          </Mutation>
      </div>
    )
  }
}
