import { rule, shield, and, not } from 'graphql-shield'

// Rules

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return ctx.user !== null
})

const isAdmin = rule()(async (parent, args, ctx, info) => {
  return ctx.user.role === 'ADMIN'
})

// Permissions

export const permissions = shield({
  Query: {
    allStories: not(isAuthenticated),
    story: and(isAuthenticated),
    allUsers: and(isAuthenticated, isAdmin),
    storiesByUser: and(isAuthenticated, isAdmin),
  },
  Mutation: {
    signup: not(isAuthenticated),
    login: not(isAuthenticated),
    createStory: isAuthenticated,
    createAddition: isAuthenticated,
    createAdmin: isAdmin,
  },
  Addition: isAuthenticated,
})
