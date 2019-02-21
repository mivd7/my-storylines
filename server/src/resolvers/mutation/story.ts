import { getUserId, Context } from '../../utils'

export const story = {
  async createStory(root, args, ctx: Context) {
    const userId = getUserId(ctx)
    return ctx.prisma.createStory(
      {
        content: args.content,
        author: {
          connect: { id: userId }
        }
      }
    )
  },

  // async deleteStory(parent, { id }, ctx: Context, info) {
  //   const userId = getUserId(ctx)
  //   const storyExists = await ctx.prisma.$exists.story({
  //     id,
  //     author: { id: userId },
  //   })
  //   if (!storyExists) {
  //     throw new Error(`Story not found or you're not the author`)
  //   }

  //   return ctx.prisma.deleteStory({ id })
  // },
}