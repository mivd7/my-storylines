export default {
  allUsers,
  allStories,
  story,
  storiesByUser
}

function allStories(root, args, context) {
    return context.db.stories()
  }

function allUsers(root, args, context) {
  return context.db.users()
}

function story(root, args, context) {
    return context.db.story({ id: args.id })
  }

function storiesByUser(root, args, context) {
    return context.db.user({
      id: args.userId
    }).stories()
  }