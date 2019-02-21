import { Context } from '../utils'

export const Story = {
  author: ({ id }, args, ctx: Context) => {
    return ctx.prisma.story({ id }).author()
  },
  additions({ id }, args, ctx: Context) {
    return ctx.prisma.addition({ id }).story()
  }
}