import { Context } from '../utils'

export const Addition = {
  story: ({ id }, args, ctx: Context) => {
    return ctx.prisma.story({ id }).additions()
  }
}