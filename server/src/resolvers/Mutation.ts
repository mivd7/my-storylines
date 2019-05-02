
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { APP_SECRET, getUserId, Context } from '../utils'

export default {
  createStory,
  createAddition,
  signup,
  createAdmin,
}

//user mutations
async function signup(parent, args, context: Context, info) {
  console.log(context.db)
  const encryptedPassword = await hash(args.password, 10)
  const user = await context.db.createUser({
    email: args.email, 
    password: encryptedPassword, 
    name: args.name, 
    accessRole: 'USER',
  })

  const token = sign({ userId: user.id }, APP_SECRET)

  return { token, user }
}
function createAdmin(root, args, context) {
  return context.prisma.createUser(
    { name: args.name,
      email: args.email,
      password: args.password,
      accessRole: "ADMIN" },
  )
}

// story mutations
async function createStory(root, args, context) {
  const story = await context.prisma.createStory(
    {
      title: args.title,
      content: args.content,
      author: {
        //later null weghalen
        connect: { id: args.userId || null }
      }
    }
  )
  return story
}

// addition mutations
async function createAddition(root, args, context) {
  const addition = await context.prisma.createAddition(
    {
      text: args.text,
      story: {
        connect: {id: args.storyId}
      }
    }
  )
  return addition
}

