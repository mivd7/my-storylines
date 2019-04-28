import React from 'react';
import { Query } from 'react-apollo';
import {GET_STORY_ADDITIONS} from '../actions/queries';
import StoryInputForm from './StoryInputForm'

const storyInProgress = (props) => {
  const storyId = props.match.params.id

  const query = {
    story: GET_STORY_ADDITIONS,
    variables: { id: `${storyId}`}
  }
  
  return (
    <Query query={query.story} variables={query.variables}>
      {({ loading, error, data }) => {
        console.log(data)
        const story = data.story
        if (loading) return "Loading...";
        if (error) return `Error! ${error}`;
        
        return (
          <div>
            <h4>{story.content}</h4>
            {story.additions.map(addition => <p><br/>{addition.text}</p> )}
            <StoryInputForm storyId={storyId}/>
          </div>
        )
      }}
  </Query>
)}

export default storyInProgress