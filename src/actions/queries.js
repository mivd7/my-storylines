import gql from 'graphql-tag';

export const SET_ADDITION = 'SET_ADDITION' 

export const GET_STORY = gql`query Story ($id: ID!){
  story(where: {id: $id}) {
      id
      openingLine
      createdAt
      author {
        name
      }
  }
}`

export const GET_STORY_ADDITIONS = gql`query Story ($id: ID!){
    story(where: {id: $id}) {
        id
        openingLine
        additions {
          id
          createdAt
        }
    }
}`

export const GET_STORIES = gql`query Story {
    stories {
      id
      title
      openingLine
      createdAt
      author {
        name
      }
    }
  }
`;

export function setAdditions(addition) {
  return {
    type: SET_ADDITION,
    payload: addition
  }
}
