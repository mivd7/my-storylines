function newStorySubscribe(parent, args, context, info) {
  return context.db.$subscribe.story({ mutation_in: ['CREATED'] }).node()
}

function loginSubscribe(parent, args, context, info) {
  return context.db.$subscribe.user({ mutation_in: ['LOGIN'] }).node()
}

const newStory = {
  subscribe: newStorySubscribe,
  resolve: payload => {
    return payload
  },
}

const newLogin = {
  subscribe: loginSubscribe,
  resolve: payload => {
    return payload
  }
}

export {
  newStory,
  newLogin,
}