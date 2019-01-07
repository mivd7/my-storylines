import { prisma } from '../generated/prisma-client'
import {GraphQLServer} from 'graphql-yoga'

//RESOLVERS
const resolvers = {
  Query: {
    allStories(root, args, context) {
      return context.prisma.stories()
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
      return context.prisma.createPost(
        {
          content: args.title,
          author: {
            connect: { id: args.userId }
          }
        },

      )
    },
    publish(root, args, context) {
      return context.prisma.updatePost(
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
