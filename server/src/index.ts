import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import { prisma } from '../generated/prisma-client';
import dotenv from 'dotenv'

console.log(dotenv)
console.log(process.env)

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
    }),

})

server.start(() => console.log(`Server is running on http://localhost:4000`))