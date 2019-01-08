import React, { Component } from 'react'
import { Mutation } from "react-apollo"
import { STORY_MUTATION } from '../actions/mutations'

export default class AddOpeningLine extends Component {
  state = {
    content: '',
  }

  render() {
    const { content } = this.state
    const dummyUser = "cjqm99khm002l0738jlaqzylo"
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="Add your own opening line"
          />
        </div>
          <Mutation mutation={STORY_MUTATION}
                    variables={{ content, userId: `${dummyUser}` }} >
            {storyMutation => <button onClick={storyMutation}>Submit</button>}
          </Mutation>
          <p>{this.state.content}</p>
      </div>
    )
  }
}
