export default {
  allStories,
  story,
  storiesByUser
}

function allStories(root, args, context) {
    return context.prisma.stories()
  }

function story(root, args, context) {
    return context.prisma.story({ id: args.storyId })
  }

function storiesByUser(root, args, context) {
    return context.prisma.user({
      id: args.userId
    }).stories()
  }