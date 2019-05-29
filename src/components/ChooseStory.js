import React from 'react'
import {Link} from 'react-router-dom'
import { Query } from "react-apollo"

import {getRandomLines} from '../lib/generateLines'
import {formatDate} from '../lib/dateFormats'
import {GET_STORIES} from '../actions/queries'

const ChooseStory = () => (
  <Query query={GET_STORIES}>
    {({ loading, error, data }) => {
      console.log(data)
      if (loading) return "Loading...";
      if (error) return `error! ${error}`

      const {allStories} = data
      const threeStories = getRandomLines(allStories, 3)
      
      return (
        <div>
          {!allStories && <div>wait for it...</div>}
          <h2>CHOOSE AN OPENING LINE</h2>
          <iframe title="7dwarfs" src="https://giphy.com/embed/AOqKdtVvmMAI8" width="360" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <ul>{threeStories.map(story => <div>
          <li><Link to={`/stories/${story.id}`} >{story.openingLine}</Link></li>
          <p>Started by {story.author.name} on {formatDate(story.createdAt)} </p>
          </div>)}
          </ul>
        </div>
      )
    }}
  </Query>
);

export default ChooseStory
