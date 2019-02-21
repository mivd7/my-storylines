import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context) {
    return ctx.prisma.stories()
  },

  // drafts(parent, args, ctx: Context) {
  //   const id = getUserId(ctx)

  //   const where = {
  //     published: false,
  //     author: {
  //       id,
  //     },
  //   }

  //   return ctx.prisma.stories({ where })
  // },

  story(parent, { id }, ctx: Context) {
    return ctx.prisma.story({ id })
  },

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },

  allStories(root, args, context) {
    return context.prisma.stories()
  },

  storiesByUser({ id }, args, ctx: Context) {
    return ctx.prisma.user({
      id }).stories()
  }
}