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
        const noTitle = 'Once upon a time...'
    
        if (loading) return "Loading...";
        if (error) return "An error occured while loading story..." + console.log(error.message);
        
        return (
          <div>
            <iframe src="https://giphy.com/embed/M5KFysE4oqmLm" width="480" height="288" frameBorder="0" class="giphy-embed"></iframe>
            <h1>{data.story.title || noTitle}</h1>
            <h4>{data.story.openingLine}</h4>
            {data.story.additions.map(addition => <p><br/>{addition.text}</p> )}
            <StoryInputForm storyId={storyId} additions={data.story.additions} />
          </div>
        )
      }}
  </Query>
  )
}

export default storyInProgress