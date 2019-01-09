import gql from 'graphql-tag';

export const CREATE_STORY = gql`mutation Story($content: String!, $userId: ID!) {
    createStory(content: $content, userId: $userId) {
      id
      content
    }
  }
`
export const ADD_TO_STORY = gql`mutation Addition($text: String!, $storyId: ID!) {
  addToStory(text: $text, storyId: $storyId) {
    id
    text
    story {
      id
      content
    }
  }
}`
