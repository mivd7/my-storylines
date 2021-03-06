import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getUserId, Context } from '../utils'

export default {
  createStory,
  createAddition,
  createAdmin,
  adminLogin,
  signup,
  login
}

//user mutations
async function signup(parent, args, context, info) {
  console.log(context.db)
  const encryptedPassword = await hash(args.password, 10)
  const user = await context.db.createUser({
    email: args.email, 
    password: encryptedPassword, 
    name: args.name, 
    accessRole: 'USER',
  })

  const token = sign({ userId: user.id })

  return { token, user }
}

async function login(parent, { email, password }, context, info) {
  const user = await context.db.user({ email, password })
  if (!user) {
    throw new Error('Unknown user')
  }

  const valid = await compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = sign({ userId: user.id })

  return { token, user }
}

function createAdmin(root, args, context) {
  return context.db.createUser(
    { name: args.name,
      email: args.email,
      password: args.password,
      accessRole: "ADMIN" },
  )
}


async function adminLogin(parent, { email, password }, context, info) {
  const user = await context.db.user({ email, password })

  if (!user) {
    throw new Error('User unknown')
  }
  if (user.accessRole !== 'ADMIN') {
    throw new Error('Not an admin')
  }

  const valid = await compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
    const token = sign({ userId: user.id })
    return { token, user }
  }



// story mutations
async function createStory(root, args, context) {
  const story = await context.db.createStory(
    {
      title: args.title,
      openingLine: args.openingLine,
      author: {
        //later null weghalen
        connect: { id: args.userId }
      }
    }
  )
  return story
}

// addition mutations
async function createAddition(root, args, context) {
  const addition = await context.db.createAddition(
    {
      text: args.text,
      story: {
        connect: {id: args.storyId}
      }
    }
  )
  return addition
}