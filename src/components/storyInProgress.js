import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import {STORY_QUERY} from '../actions/queries'

export default class StoryInProgress extends Component {
  state = { story: null };

  storyFetched = story => this.setState(() => ({ story }));

  render() {
    console.log(this.state)
    console.log(this.props)
    const storyId = this.props.match.params.id
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.story && <p>{this.state.story.content}</p>}
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: STORY_QUERY,
                  variables: { id: `${storyId}` }
                });
                this.storyFetched(data.story);
              }}
            >
              Click here to start!
            </button>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}