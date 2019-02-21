import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './mutation/auth'
import { story } from './mutation/story'
import { addition } from './mutation/addition'
import { User } from './User'
import { Story } from './Story'

export default {
  Query,
  Mutation: {
    ...auth,
    ...story,
    ...addition
  },
  Subscription,
  User,
  Story,
}