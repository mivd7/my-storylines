import gql from 'graphql-tag';

export const STORY_QUERY = gql
  `query Story ($id: ID!){
    story(storyId: $id) {
      content
    }
}`

export const GET_STORIES = gql
  `{
    allStories {
      id
      content
    }
  }
`;