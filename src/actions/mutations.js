import gql from 'graphql-tag';

export const STORY_MUTATION = gql
  `mutation Story($content: String!, $userId: ID!) {
    createStory(content: $content, userId: $userId) {
      id
      content
    }
  }
`