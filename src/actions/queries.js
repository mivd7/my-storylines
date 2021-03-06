import gql from 'graphql-tag';

export const GET_STORY = gql`query Story ($id: ID!){
  story(id: $id) {
      id
      openingLine
      createdAt
      author {
        name
      }
  }
}`

export const GET_STORY_ADDITIONS = gql`query Story ($id: ID!){
    story(storyId: $id) {
        id
        openingLine
        additions {
          id
          text
          createdAt
        }
    }
}`

export const GET_USER_BY_STORY = gql`query Story ($id: ID!){
  story(id: $id) {
      id
      createdAt
      author {
        id
        name
      }
  }
}`

export const GET_STORIES = gql`query Story {
    allStories {
      id
      title
      openingLine
      createdAt
      author {
        id
        name
      }
    }
  }`;