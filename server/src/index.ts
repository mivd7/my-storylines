import { prisma } from '../generated/prisma-client'
import {GraphQLServer} from 'graphql-yoga'

//RESOLVERS
const resolvers = {
  Query: {
    allStories(root, args, context) {
      return context.prisma.stories()
    },
    allAdditions(root, args, context) {
      return context.prisma.additions({story: args.storyId})
    },
    story(root, args, context) {
      return context.prisma.story({ id: args.storyId })
    },
    storiesByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).stories()
    }
  },
  Mutation: {
    createStory(root, args, context) {
      return context.prisma.createStory(
        {
          content: args.content,
          author: {
            connect: { id: args.userId }
          }
        },

      )
    },

    addToStory(root, args, context) {
      return context.prisma.createAddition(
        {
          text: args.text,
          story: {
            connect: {id: args.storyId}
          }
        },
      )
    },

    publish(root, args, context) {
      return context.prisma.updateStory(
        {
          where: { id: args.storyId },
          data: { published: true },
        },

      )
    },
    createUser(root, args, context) {
      return context.prisma.createUser(
        { name: args.name },
      )
    }
  },
  User: {
    stories(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).stories()
    }
  },
  Story: {
    author(root, args, context) {
      return context.prisma.story({
        id: root.id
      }).author()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))