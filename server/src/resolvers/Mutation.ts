import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { APP_SECRET, getUserId, Context } from '../utils'

export default {
  login,
  signup,
}

/*****  user functionalities  *****/

async function login(parent, { email, password }, context: Context, info) {
  const user = await context.db.user({ email, password })
  if (!user) {
    throw new Error('Unknown user')
  }

  const valid = await compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}

async function signup(parent, args, context: Context, info) {
  const encryptedPassword = await hash(args.password, 10)
  const user = await context.db.createUser({
    email: args.email, 
    password: encryptedPassword, 
    name: args.name, 
    accessRole: args.accessRole
  })

  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}