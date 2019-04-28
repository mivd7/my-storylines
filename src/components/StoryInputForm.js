import React, { Component } from 'react'
import { Mutation } from "react-apollo"
import { ADD_TO_STORY } from '../actions/mutations'
import {Link} from 'react-router-dom'

export default class StoryInputForm extends Component {
  state = {
    text: '',
    additions: null,
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <div className="flex flex-column">
        {text}
        <br/>
          <input
            value={text}
            onChange={e => this.setState({ text: e.target.value })}
            placeholder="Add Your Line"
          />
        </div>
          <Mutation mutation={ADD_TO_STORY}
                    variables={{ text, storyId: `${this.props.storyId}` }} >
            {addMutation => <div><button onClick={addMutation}><Link to={`/stories/${this.props.storyId}`}>Submit</Link></button></div>}
          </Mutation>
      </div>
    )
  }
}