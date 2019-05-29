import {Context, getUserId} from '../utils'

export default {
  allUsers,
  allStories,
  story,
  storiesByUser,
  // me
}

function allStories(parent, args, context, info) {
    const stories = context.db.stories({ where: { } }, info)
    console.log(stories)
    return stories
  }

function allUsers(root, args, context) {
  return context.db.users()
}

function story(root, args, context) {
    return context.db.story({id: args.storyId })
  }

function storiesByUser(root, args, context) {
    return context.db.user({
      id: args.userId
    }).stories()
  }

// function me(parent, args, ctx, info) {
//     const id = getUserId(ctx)
//     return ctx.db.user({
//       id: id
//     }).stories()
//   }