import gql from 'graphql-tag';

//story
export const CREATE_STORY = gql`mutation Story($openingLine: String!, $userId: ID!) {
    createStory(openingLine: $openingLine, userId: $userId) {
      id
      openingLine
    }
  }
`
export const ADD_TO_STORY = gql`mutation Addition($text: String!, $storyId:ID!) {
 createAddition(text: $text, storyId: $storyId) {
   id
   createdAt
   text
   story {
     id
     openingLine
   }
 }
}`

//user
// export const SIGNUP = gql`mutation User(())