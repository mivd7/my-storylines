import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { APP_SECRET, getUserId, Context } from '../utils'

export default {
  login,
  signup,
  createStory,
  addToStory,
  createUser,
  createAdmin,
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

function createStory(root, args, context) {
  const userId = getUserId(context)
  return context.prisma.createStory(
    {
      content: args.content,
      author: {
        connect: { id: userId }
      }
    },
  )
}

function addToStory(root, args, context) {
  return context.prisma.createAddition(
    {
      text: args.text,
      story: {
        connect: {id: args.storyId}
      }
    },
  )
}

function createUser(root, args, context) {
  return context.prisma.createUser(
    { name: args.name,
      email: args.email,
      password: args.password,
      accessRole: "USER" },
  )
}
function createAdmin(root, args, context) {
  return context.prisma.createUser(
    { name: args.name,
      email: args.email,
      password: args.password,
      accessRole: "ADMIN" },
  )
}