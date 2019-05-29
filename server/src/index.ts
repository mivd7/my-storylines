import { GraphQLServer } from "graphql-yoga";
import * as session from "express-session";
import { Prisma } from "./generated/prisma";
import resolvers from "./resolvers";
import { prisma } from "../generated/prisma-client";

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: prisma
    // db: new Prisma({
    //   endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466', // the endpoint of the Prisma DB service (value is set in .env)
    //   debug: false // log all GraphQL queries & mutations
    // })
  })
});

const SESSION_SECRET = "mysecret";

server.express.use(
  session({
    name: "qid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
);
const cors = {
  credentials: true,
  // origin = location of client 
  origin: "http://localhost:3000"
};

server.start({ cors }, () =>
  console.log(`Server is running on http://localhost:4000`)
);