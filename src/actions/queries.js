import gql from 'graphql-tag';

export const SET_ADDITION = 'SET_ADDITION' 

export const STORY_QUERY = gql`query Story ($id: ID!){
    story(storyId: $id) {
      content
    }
}`

export const GET_STORY_ADDITIONS = gql`query Story ($id: ID!){
    story(storyId: $id) {
      id
      content
      additions {
        id  
        text  
      }
    }
}`

export const GET_STORIES = gql`query Story {
    allStories {
      id
      content
    }
  }
`;

export function setAdditions(addition) {
  return {
    type: SET_ADDITION,
    payload: addition
  }
}
