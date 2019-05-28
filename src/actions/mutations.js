import gql from 'graphql-tag';

//story
export const CREATE_STORY = gql`mutation Story($title: String! $openingLine: String!, $userId: ID!) {
    createStory(title: $title, openingLine: $openingLine, userId: $userId) {
      id
      title
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
export const SIGNUP = gql`mutation signup($email: String!, 
                                          $password: String!, 
                                          $name: String!) {
          signup(email: $email, password: $password, name: $name) {
            token
          }
}`