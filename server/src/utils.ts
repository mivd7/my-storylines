import { Prisma } from '../generated/prisma-client'
import { verify } from 'jsonwebtoken'

export const APP_SECRET = 'GraphQL-is-aw3some'

export function getUserId(context) {
  // console.log('REQUEST:')
  // console.log(context.request)
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const userId = verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

export function getUser(req) {
  console.log(req)
  const auth = req.get('Authorization')
  if (req.user[auth]) {
    return req.user[auth]
  } else {
    throw new Error('Authentication failed')
  }
}

export interface Context {
  db: Prisma
}