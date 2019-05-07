import { prisma } from '../generated/prisma-client'
import {GraphQLServer} from 'graphql-yoga'
import resolvers from './resolvers'
import {permissions} from './permissions'
import { getUserId } from './utils';

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    user: getUserId(req),
    db: prisma,
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))