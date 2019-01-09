import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { Mutation } from "react-apollo"
import { CREATE_STORY } from '../actions/mutations'

export default class AddOpeningLine extends Component {
  state = {
    content: ''
  }

  render() {
    const { content } = this.state
    const dummyUser = "cjqm99khm002l0738jlaqzylo"
    return (
      <div>
        <div className="flex flex-column">
        <p>Don't like these? Create your own below:</p>
          <input
            value={content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
          />
        </div>
          <Mutation mutation={CREATE_STORY}
                    variables={{ content, userId: `${dummyUser}` }} >
            {storyMutation => <div><button onClick={storyMutation}>Submit</button>
            <Link to={`/stories/${storyMutation}`}><p>{this.state.content}</p></Link></div>}
          </Mutation>
      </div>
    )
  }
}
