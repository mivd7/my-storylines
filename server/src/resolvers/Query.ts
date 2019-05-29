import {Context, getUserId} from '../utils'

export default {
  allUsers,
  allStories,
  story,
  storiesByUser,
  me
}

function allStories(root, args, context) {
    return context.db.stories()
  }

function allUsers(root, args, context) {
  return context.db.users()
}

function story(root, args, context) {
    return context.db.story({ id: args.storyId })
  }

function storiesByUser(root, args, context) {
    return context.db.user({
      id: args.userId
    }).stories()
  }

function me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    console.log(id)
    return ctx.db.query.user({ where: { id } }, info)
  }