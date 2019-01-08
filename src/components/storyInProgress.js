import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import {Link} from 'react-router-dom'
import {STORY_QUERY} from '../actions/queries'

export default class StoryInProgress extends Component {
  state = { story: null };

  storyFetched = story => this.setState(() => ({ story }));

  render() {
    console.log(this.state)
    const storyId = this.props.match.params.id
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.story === null && <h1>Once upon a time...</h1>}
            {this.state.story && <div><h1>Once upon a time...</h1>
                                      <p>{this.state.story.content}</p></div>}
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: STORY_QUERY,
                  variables: { id: `${storyId}` }
                });
                this.storyFetched(data.story);
              }}
            >
              Click to start the story!
            </button>
            <br/>
            <Link to={'/'}><p>Go back home</p></Link>
            <Link to={'/start'}><p>Pick a different opening line</p></Link>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}