import { Context } from '../utils'

export const User = {
  stories: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).stories()
  },
}