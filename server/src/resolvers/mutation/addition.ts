import { getUserId, Context } from '../../utils'

export const addition = {
  createAddition(root, args, ctx: Context) {
    const userId = getUserId(ctx)
    return ctx.prisma.createAddition(
      {
        text: args.text,
        writtenBy: {
          connect: { id: userId }
        },
        story: {
          connect: {id: args.storyId}
        }
      },
    )
  },
}