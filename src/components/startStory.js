import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {getRandomLines} from '../lib/randomLines'

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_STORIES = gql`
  {
    allStories {
      id
      content
    }
  }
`;

const startStory = () => (
  <Query query={GET_STORIES}>
    {({ loading, error, data }) => {
      console.log(data)
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      const stories = data.allStories
      const storiesToRender = getRandomLines(stories, 3)
      return (
        <div>
          <h2>CHOOSE AN OPENING LINE</h2>
          <iframe title="7dwarfs" src="https://giphy.com/embed/AOqKdtVvmMAI8" width="360" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <ul>{storiesToRender.map(story => 
          <li><Link to={`/stories/${story.id}`}>{story.content}</Link></li>)}
          </ul>
        </div>
      )
    }}
  </Query>
);

export default startStory