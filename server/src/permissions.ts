import { rule, shield } from 'graphql-shield'
import { getUserId } from './utils'

// Rules

const rules = {
  isAuthenticated: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
// const isAdmin = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.role === 'ADMIN'
}

// Permissions

export const permissions = shield({
  Query: {
    story: rules.isAuthenticated,
    storiesByUser: rules.isAuthenticated,
  },
  Mutation: {
    createStory: rules.isAuthenticated,
    createAddition: rules.isAuthenticated,
    // createAdmin: isAdmin,
  },
  // Addition: rules.isAuthenticated,
})
