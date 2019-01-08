import gql from 'graphql-tag';

export const STORY_QUERY = gql
  `query Story ($id: ID!){
    story(storyId: $id) {
      content
    }
}`