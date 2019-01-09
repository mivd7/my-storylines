import gql from 'graphql-tag';

export const CREATE_STORY = gql`mutation Story($content: String!, $userId: ID!) {
    createStory(content: $content, userId: $userId) {
      id
      content
    }
  }
`

