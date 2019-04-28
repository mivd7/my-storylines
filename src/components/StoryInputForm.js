import React, { Component } from 'react'
import { Mutation } from "react-apollo"
import { ADD_TO_STORY } from '../actions/mutations'
import {checkSubmitStatus} from '../lib/checkStoryStatus';

export default class AddOpeningLine extends Component {
  state = {
    text: '',
    isSubmitting: null,
  }

  componentDidUpdate() {
    checkSubmitStatus(this.state.isSubmitting)
  }

  render() {
    const { text } = this.state
    console.log()
    return (
      <div>
        <div className="flex flex-column">
          <input
            value={text}
            onChange={e => this.setState({ text: e.target.value, isSubmitting: true })}
            placeholder="Add Your Line"
          />
        </div>
          <Mutation mutation={ADD_TO_STORY}
                    variables={{ text, storyId: `${this.props.storyId}` }} >
            {addMutation => <div><button onClick={{addMutation}}             onSubmit={() =>  this.setState({isSubmitting: false})}
>Update story</button></div>}
          </Mutation>
      </div>
    )
  }
}
