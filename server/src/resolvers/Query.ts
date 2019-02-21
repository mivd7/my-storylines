import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context) {
    return ctx.prisma.stories()
  },

  // feedUsers(parent, args, ctx: Context) {
  //   console.log(ctx.prisma)
  //   return ctx.prisma.users()
  // },
  
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

  allUsers(root, args, context) {
    return context.prisma.users()
  },

  storiesByUser({ id }, args, ctx: Context) {
    return ctx.prisma.user({
      id }).stories()
  }
}