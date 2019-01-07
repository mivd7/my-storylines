import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getRandomLines} from '../lib/openingLines'

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
      const mapStories = stories.map(story => story.content)
      console.log(mapStories)
      const threeLines = getRandomLines(mapStories, 3)
      console.log(threeLines)

      return (
        <div>
          <h2>CHOOSE AN OPENING LINE</h2>
          <iframe title="7dwarfs" src="https://giphy.com/embed/AOqKdtVvmMAI8" width="360" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>1. {threeLines[0]}</p>
          <br/>
          <p>2. {threeLines[1]}</p>
          <br />
          <p>3. {threeLines[2]}</p>
        </div>
      )
    }}
  </Query>
);

export default startStory
