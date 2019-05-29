import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../utils'

export default {
  createStory,
  createAddition,
  createAdmin,
  // adminLogin,
  signup,
  login
}

//user mutations
async function signup(parent, args, context: Context, info) {
  const password = await bcrypt.hash(args.password, 10);
    const user = await context.db.mutation.createUser({
      data: { ...args, password }
    });

    context.request.session.userId = user.id;

    return {
      user
    };
}

async function login(parent, { email, password }, context: Context, info) {
  const user = await context.db.query.user({ where: { email } });
  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  } 

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  context.request.session.userId = user.id

  console.log(`THIS IS REQUEST SESSION: ${context.request.session}`)
  console.log(`USER WITH ID ${user.id} LOGGED IN`)
  return {
    user
  };
}

function createAdmin(root, args, context) {
  return context.db.mutation.createUser(
    { name: args.name,
      email: args.email,
      password: args.password,
      accessRole: "ADMIN" },
  )
}


// async function adminLogin(parent, { email, password }, context: Context, info) {
//   const user = await context.db.user({ email, password })

//   if (!user) {
//     throw new Error('User unknown')
//   }
//   if (user.accessRole !== 'ADMIN') {
//     throw new Error('Not an admin')
//   }

//   const valid = await compare(password, user.password)
//     if (!valid) {
//       throw new Error('Invalid password')
//     }
//     const token = sign({ userId: user.id }, APP_SECRET)
//     return { token, user }
//   }



// story mutations
async function createStory(root, args, context) {
  const story = await context.db.mutation.createStory(
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
  const addition = await context.db.mutation.createAddition(
    {
      text: args.text,
      story: {
        connect: {id: args.storyId}
      }
    }
  )
  return addition
}

