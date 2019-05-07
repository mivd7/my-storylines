const Subscription = {
  //stories subscriptions
  newStory: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .story({
          mutation_in: ['CREATED'],
        })
        .node()
    },
  newAddition: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .addition({
          mutation_in: ['CREATED'],
        })
        .node()
        // .next(console.log('addition was created!!'))
    }
  },
  resolve: payload => {
      return payload
    },
  },
}

export default Subscription