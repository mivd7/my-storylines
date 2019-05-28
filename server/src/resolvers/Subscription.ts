function newStorySubscribe(parent, args, context, info) {
  return context.db.$subscribe.story({ mutation_in: ['CREATED'] }).node()
}

const newStory = {
  subscribe: newStorySubscribe,
  resolve: payload => {
    return payload
  },
}

export {
  newStory
}