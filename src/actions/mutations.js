import gql from 'graphql-tag';

export const CREATE_STORY = gql`mutation Story($openingLine: String!, $userId: ID!) {
    createStory(openingLine: $openingLine, userId: $userId) {
      id
      openingLine
    }
  }
`
export const ADD_TO_STORY = gql`mutation Addition($text: String!, $storyId: ID!) {
  addToStory(text: $text, storyId: $storyId) {
    id
    text
    story {
      id
      openingLine
    }
  }
}`