import {Context, getUserId} from '../utils'

export default {
  allUsers,
  allStories,
  story,
  storiesByUser,
  me
}

function allStories(root, args, context) {
    return context.db.query.stories()
  }

function allUsers(root, args, context) {
  return context.db.query.users()
}

function story(root, args, context) {
    return context.db.query.story({ id: args.storyId })
  }

function storiesByUser(root, args, context) {
    return context.db.query.user({
      id: args.userId
    }).stories()
  }

function me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  }