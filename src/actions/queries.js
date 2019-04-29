import gql from 'graphql-tag';

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
          text
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
  }`;