import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    stories: <T = Array<Story | null>>(args: { where?: StoryWhereInput | null, orderBy?: StoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    additions: <T = Array<Addition | null>>(args: { where?: AdditionWhereInput | null, orderBy?: AdditionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    story: <T = Story | null>(args: { where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    addition: <T = Addition | null>(args: { where: AdditionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    storiesConnection: <T = StoryConnection>(args: { where?: StoryWhereInput | null, orderBy?: StoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    additionsConnection: <T = AdditionConnection>(args: { where?: AdditionWhereInput | null, orderBy?: AdditionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createStory: <T = Story>(args: { data: StoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAddition: <T = Addition>(args: { data: AdditionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStory: <T = Story | null>(args: { data: StoryUpdateInput, where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAddition: <T = Addition | null>(args: { data: AdditionUpdateInput, where: AdditionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteStory: <T = Story | null>(args: { where: StoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAddition: <T = Addition | null>(args: { where: AdditionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertStory: <T = Story>(args: { where: StoryWhereUniqueInput, create: StoryCreateInput, update: StoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAddition: <T = Addition>(args: { where: AdditionWhereUniqueInput, create: AdditionCreateInput, update: AdditionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStories: <T = BatchPayload>(args: { data: StoryUpdateManyMutationInput, where?: StoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAdditions: <T = BatchPayload>(args: { data: AdditionUpdateManyMutationInput, where?: AdditionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStories: <T = BatchPayload>(args: { where?: StoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAdditions: <T = BatchPayload>(args: { where?: AdditionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    story: <T = StorySubscriptionPayload | null>(args: { where?: StorySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    addition: <T = AdditionSubscriptionPayload | null>(args: { where?: AdditionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Story: (where?: StoryWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Addition: (where?: AdditionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `enum AccessRole {
  USER
  ADMIN
}

type Addition implements Node {
  id: ID!
  createdAt: DateTime!
  text: String!
  story: Story!
  writtenBy: User
}

"""A connection to a list of items."""
type AdditionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AdditionEdge]!
  aggregate: AggregateAddition!
}

input AdditionCreateInput {
  text: String!
  story: StoryCreateOneWithoutAdditionsInput!
  writtenBy: UserCreateOneWithoutAdditionsInput
}

input AdditionCreateManyWithoutStoryInput {
  create: [AdditionCreateWithoutStoryInput!]
  connect: [AdditionWhereUniqueInput!]
}

input AdditionCreateManyWithoutWrittenByInput {
  create: [AdditionCreateWithoutWrittenByInput!]
  connect: [AdditionWhereUniqueInput!]
}

input AdditionCreateWithoutStoryInput {
  text: String!
  writtenBy: UserCreateOneWithoutAdditionsInput
}

input AdditionCreateWithoutWrittenByInput {
  text: String!
  story: StoryCreateOneWithoutAdditionsInput!
}

"""An edge in a connection."""
type AdditionEdge {
  """The item at the end of the edge."""
  node: Addition!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AdditionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdditionPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

input AdditionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AdditionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdditionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdditionScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

type AdditionSubscriptionPayload {
  mutation: MutationType!
  node: Addition
  updatedFields: [String!]
  previousValues: AdditionPreviousValues
}

input AdditionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdditionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdditionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdditionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AdditionWhereInput
}

input AdditionUpdateInput {
  text: String
  story: StoryUpdateOneRequiredWithoutAdditionsInput
  writtenBy: UserUpdateOneWithoutAdditionsInput
}

input AdditionUpdateManyDataInput {
  text: String
}

input AdditionUpdateManyMutationInput {
  text: String
}

input AdditionUpdateManyWithoutStoryInput {
  create: [AdditionCreateWithoutStoryInput!]
  connect: [AdditionWhereUniqueInput!]
  set: [AdditionWhereUniqueInput!]
  disconnect: [AdditionWhereUniqueInput!]
  delete: [AdditionWhereUniqueInput!]
  update: [AdditionUpdateWithWhereUniqueWithoutStoryInput!]
  updateMany: [AdditionUpdateManyWithWhereNestedInput!]
  deleteMany: [AdditionScalarWhereInput!]
  upsert: [AdditionUpsertWithWhereUniqueWithoutStoryInput!]
}

input AdditionUpdateManyWithoutWrittenByInput {
  create: [AdditionCreateWithoutWrittenByInput!]
  connect: [AdditionWhereUniqueInput!]
  set: [AdditionWhereUniqueInput!]
  disconnect: [AdditionWhereUniqueInput!]
  delete: [AdditionWhereUniqueInput!]
  update: [AdditionUpdateWithWhereUniqueWithoutWrittenByInput!]
  updateMany: [AdditionUpdateManyWithWhereNestedInput!]
  deleteMany: [AdditionScalarWhereInput!]
  upsert: [AdditionUpsertWithWhereUniqueWithoutWrittenByInput!]
}

input AdditionUpdateManyWithWhereNestedInput {
  where: AdditionScalarWhereInput!
  data: AdditionUpdateManyDataInput!
}

input AdditionUpdateWithoutStoryDataInput {
  text: String
  writtenBy: UserUpdateOneWithoutAdditionsInput
}

input AdditionUpdateWithoutWrittenByDataInput {
  text: String
  story: StoryUpdateOneRequiredWithoutAdditionsInput
}

input AdditionUpdateWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput!
  data: AdditionUpdateWithoutStoryDataInput!
}

input AdditionUpdateWithWhereUniqueWithoutWrittenByInput {
  where: AdditionWhereUniqueInput!
  data: AdditionUpdateWithoutWrittenByDataInput!
}

input AdditionUpsertWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput!
  update: AdditionUpdateWithoutStoryDataInput!
  create: AdditionCreateWithoutStoryInput!
}

input AdditionUpsertWithWhereUniqueWithoutWrittenByInput {
  where: AdditionWhereUniqueInput!
  update: AdditionUpdateWithoutWrittenByDataInput!
  create: AdditionCreateWithoutWrittenByInput!
}

input AdditionWhereInput {
  """Logical AND on all given filters."""
  AND: [AdditionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AdditionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AdditionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  story: StoryWhereInput
  writtenBy: UserWhereInput
}

input AdditionWhereUniqueInput {
  id: ID
}

type AggregateAddition {
  count: Int!
}

type AggregateStory {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createStory(data: StoryCreateInput!): Story!
  createUser(data: UserCreateInput!): User!
  createAddition(data: AdditionCreateInput!): Addition!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateAddition(data: AdditionUpdateInput!, where: AdditionWhereUniqueInput!): Addition
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteUser(where: UserWhereUniqueInput!): User
  deleteAddition(where: AdditionWhereUniqueInput!): Addition
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertAddition(where: AdditionWhereUniqueInput!, create: AdditionCreateInput!, update: AdditionUpdateInput!): Addition!
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyAdditions(data: AdditionUpdateManyMutationInput!, where: AdditionWhereInput): BatchPayload!
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyAdditions(where: AdditionWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  additions(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Addition]!
  story(where: StoryWhereUniqueInput!): Story
  user(where: UserWhereUniqueInput!): User
  addition(where: AdditionWhereUniqueInput!): Addition
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  additionsConnection(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdditionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Story implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String
  openingLine: String!
  additions(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Addition!]
  author: User
}

"""A connection to a list of items."""
type StoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  title: String
  openingLine: String!
  additions: AdditionCreateManyWithoutStoryInput
  author: UserCreateOneWithoutStoriesInput
}

input StoryCreateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateOneWithoutAdditionsInput {
  create: StoryCreateWithoutAdditionsInput
  connect: StoryWhereUniqueInput
}

input StoryCreateWithoutAdditionsInput {
  title: String
  openingLine: String!
  author: UserCreateOneWithoutStoriesInput
}

input StoryCreateWithoutAuthorInput {
  title: String
  openingLine: String!
  additions: AdditionCreateManyWithoutStoryInput
}

"""An edge in a connection."""
type StoryEdge {
  """The item at the end of the edge."""
  node: Story!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  openingLine_ASC
  openingLine_DESC
}

type StoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String
  openingLine: String!
}

input StoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [StoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [StoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  openingLine: String

  """All values that are not equal to given value."""
  openingLine_not: String

  """All values that are contained in given list."""
  openingLine_in: [String!]

  """All values that are not contained in given list."""
  openingLine_not_in: [String!]

  """All values less than the given value."""
  openingLine_lt: String

  """All values less than or equal the given value."""
  openingLine_lte: String

  """All values greater than the given value."""
  openingLine_gt: String

  """All values greater than or equal the given value."""
  openingLine_gte: String

  """All values containing the given string."""
  openingLine_contains: String

  """All values not containing the given string."""
  openingLine_not_contains: String

  """All values starting with the given string."""
  openingLine_starts_with: String

  """All values not starting with the given string."""
  openingLine_not_starts_with: String

  """All values ending with the given string."""
  openingLine_ends_with: String

  """All values not ending with the given string."""
  openingLine_not_ends_with: String
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StorySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
}

input StoryUpdateInput {
  title: String
  openingLine: String
  additions: AdditionUpdateManyWithoutStoryInput
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateManyDataInput {
  title: String
  openingLine: String
}

input StoryUpdateManyMutationInput {
  title: String
  openingLine: String
}

input StoryUpdateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  delete: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutAuthorInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
  deleteMany: [StoryScalarWhereInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutAuthorInput!]
}

input StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput!
  data: StoryUpdateManyDataInput!
}

input StoryUpdateOneRequiredWithoutAdditionsInput {
  create: StoryCreateWithoutAdditionsInput
  connect: StoryWhereUniqueInput
  update: StoryUpdateWithoutAdditionsDataInput
  upsert: StoryUpsertWithoutAdditionsInput
}

input StoryUpdateWithoutAdditionsDataInput {
  title: String
  openingLine: String
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateWithoutAuthorDataInput {
  title: String
  openingLine: String
  additions: AdditionUpdateManyWithoutStoryInput
}

input StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutAuthorDataInput!
}

input StoryUpsertWithoutAdditionsInput {
  update: StoryUpdateWithoutAdditionsDataInput!
  create: StoryCreateWithoutAdditionsInput!
}

input StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutAuthorDataInput!
  create: StoryCreateWithoutAuthorInput!
}

input StoryWhereInput {
  """Logical AND on all given filters."""
  AND: [StoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [StoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  openingLine: String

  """All values that are not equal to given value."""
  openingLine_not: String

  """All values that are contained in given list."""
  openingLine_in: [String!]

  """All values that are not contained in given list."""
  openingLine_not_in: [String!]

  """All values less than the given value."""
  openingLine_lt: String

  """All values less than or equal the given value."""
  openingLine_lte: String

  """All values greater than the given value."""
  openingLine_gt: String

  """All values greater than or equal the given value."""
  openingLine_gte: String

  """All values containing the given string."""
  openingLine_contains: String

  """All values not containing the given string."""
  openingLine_not_contains: String

  """All values starting with the given string."""
  openingLine_starts_with: String

  """All values not starting with the given string."""
  openingLine_not_starts_with: String

  """All values ending with the given string."""
  openingLine_ends_with: String

  """All values not ending with the given string."""
  openingLine_not_ends_with: String
  additions_every: AdditionWhereInput
  additions_some: AdditionWhereInput
  additions_none: AdditionWhereInput
  author: UserWhereInput
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  addition(where: AdditionSubscriptionWhereInput): AdditionSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  accessRole: AccessRole!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
  additions(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Addition!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  accessRole: AccessRole!
  stories: StoryCreateManyWithoutAuthorInput
  additions: AdditionCreateManyWithoutWrittenByInput
}

input UserCreateOneWithoutAdditionsInput {
  create: UserCreateWithoutAdditionsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAdditionsInput {
  name: String!
  email: String!
  password: String!
  accessRole: AccessRole!
  stories: StoryCreateManyWithoutAuthorInput
}

input UserCreateWithoutStoriesInput {
  name: String!
  email: String!
  password: String!
  accessRole: AccessRole!
  additions: AdditionCreateManyWithoutWrittenByInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  accessRole_ASC
  accessRole_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  accessRole: AccessRole!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  stories: StoryUpdateManyWithoutAuthorInput
  additions: AdditionUpdateManyWithoutWrittenByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
}

input UserUpdateOneWithoutAdditionsInput {
  create: UserCreateWithoutAdditionsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutAdditionsDataInput
  upsert: UserUpsertWithoutAdditionsInput
}

input UserUpdateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutStoriesDataInput
  upsert: UserUpsertWithoutStoriesInput
}

input UserUpdateWithoutAdditionsDataInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  stories: StoryUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutStoriesDataInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  additions: AdditionUpdateManyWithoutWrittenByInput
}

input UserUpsertWithoutAdditionsInput {
  update: UserUpdateWithoutAdditionsDataInput!
  create: UserCreateWithoutAdditionsInput!
}

input UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput!
  create: UserCreateWithoutStoriesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  accessRole: AccessRole

  """All values that are not equal to given value."""
  accessRole_not: AccessRole

  """All values that are contained in given list."""
  accessRole_in: [AccessRole!]

  """All values that are not contained in given list."""
  accessRole_not_in: [AccessRole!]
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  additions_every: AdditionWhereInput
  additions_some: AdditionWhereInput
  additions_none: AdditionWhereInput
}

input UserWhereUniqueInput {
  id: ID
  name: String
  email: String
  password: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AccessRole =   'USER' |
  'ADMIN'

export type AdditionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type StoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'openingLine_ASC' |
  'openingLine_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'accessRole_ASC' |
  'accessRole_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface AdditionCreateInput {
  text: String
  story: StoryCreateOneWithoutAdditionsInput
  writtenBy?: UserCreateOneWithoutAdditionsInput | null
}

export interface AdditionCreateManyWithoutStoryInput {
  create?: AdditionCreateWithoutStoryInput[] | AdditionCreateWithoutStoryInput | null
  connect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
}

export interface AdditionCreateManyWithoutWrittenByInput {
  create?: AdditionCreateWithoutWrittenByInput[] | AdditionCreateWithoutWrittenByInput | null
  connect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
}

export interface AdditionCreateWithoutStoryInput {
  text: String
  writtenBy?: UserCreateOneWithoutAdditionsInput | null
}

export interface AdditionCreateWithoutWrittenByInput {
  text: String
  story: StoryCreateOneWithoutAdditionsInput
}

export interface AdditionScalarWhereInput {
  AND?: AdditionScalarWhereInput[] | AdditionScalarWhereInput | null
  OR?: AdditionScalarWhereInput[] | AdditionScalarWhereInput | null
  NOT?: AdditionScalarWhereInput[] | AdditionScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
}

export interface AdditionSubscriptionWhereInput {
  AND?: AdditionSubscriptionWhereInput[] | AdditionSubscriptionWhereInput | null
  OR?: AdditionSubscriptionWhereInput[] | AdditionSubscriptionWhereInput | null
  NOT?: AdditionSubscriptionWhereInput[] | AdditionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AdditionWhereInput | null
}

export interface AdditionUpdateInput {
  text?: String | null
  story?: StoryUpdateOneRequiredWithoutAdditionsInput | null
  writtenBy?: UserUpdateOneWithoutAdditionsInput | null
}

export interface AdditionUpdateManyDataInput {
  text?: String | null
}

export interface AdditionUpdateManyMutationInput {
  text?: String | null
}

export interface AdditionUpdateManyWithoutStoryInput {
  create?: AdditionCreateWithoutStoryInput[] | AdditionCreateWithoutStoryInput | null
  connect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  set?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  disconnect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  delete?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  update?: AdditionUpdateWithWhereUniqueWithoutStoryInput[] | AdditionUpdateWithWhereUniqueWithoutStoryInput | null
  updateMany?: AdditionUpdateManyWithWhereNestedInput[] | AdditionUpdateManyWithWhereNestedInput | null
  deleteMany?: AdditionScalarWhereInput[] | AdditionScalarWhereInput | null
  upsert?: AdditionUpsertWithWhereUniqueWithoutStoryInput[] | AdditionUpsertWithWhereUniqueWithoutStoryInput | null
}

export interface AdditionUpdateManyWithoutWrittenByInput {
  create?: AdditionCreateWithoutWrittenByInput[] | AdditionCreateWithoutWrittenByInput | null
  connect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  set?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  disconnect?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  delete?: AdditionWhereUniqueInput[] | AdditionWhereUniqueInput | null
  update?: AdditionUpdateWithWhereUniqueWithoutWrittenByInput[] | AdditionUpdateWithWhereUniqueWithoutWrittenByInput | null
  updateMany?: AdditionUpdateManyWithWhereNestedInput[] | AdditionUpdateManyWithWhereNestedInput | null
  deleteMany?: AdditionScalarWhereInput[] | AdditionScalarWhereInput | null
  upsert?: AdditionUpsertWithWhereUniqueWithoutWrittenByInput[] | AdditionUpsertWithWhereUniqueWithoutWrittenByInput | null
}

export interface AdditionUpdateManyWithWhereNestedInput {
  where: AdditionScalarWhereInput
  data: AdditionUpdateManyDataInput
}

export interface AdditionUpdateWithoutStoryDataInput {
  text?: String | null
  writtenBy?: UserUpdateOneWithoutAdditionsInput | null
}

export interface AdditionUpdateWithoutWrittenByDataInput {
  text?: String | null
  story?: StoryUpdateOneRequiredWithoutAdditionsInput | null
}

export interface AdditionUpdateWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput
  data: AdditionUpdateWithoutStoryDataInput
}

export interface AdditionUpdateWithWhereUniqueWithoutWrittenByInput {
  where: AdditionWhereUniqueInput
  data: AdditionUpdateWithoutWrittenByDataInput
}

export interface AdditionUpsertWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput
  update: AdditionUpdateWithoutStoryDataInput
  create: AdditionCreateWithoutStoryInput
}

export interface AdditionUpsertWithWhereUniqueWithoutWrittenByInput {
  where: AdditionWhereUniqueInput
  update: AdditionUpdateWithoutWrittenByDataInput
  create: AdditionCreateWithoutWrittenByInput
}

export interface AdditionWhereInput {
  AND?: AdditionWhereInput[] | AdditionWhereInput | null
  OR?: AdditionWhereInput[] | AdditionWhereInput | null
  NOT?: AdditionWhereInput[] | AdditionWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  story?: StoryWhereInput | null
  writtenBy?: UserWhereInput | null
}

export interface AdditionWhereUniqueInput {
  id?: ID_Input | null
}

export interface StoryCreateInput {
  title?: String | null
  openingLine: String
  additions?: AdditionCreateManyWithoutStoryInput | null
  author?: UserCreateOneWithoutStoriesInput | null
}

export interface StoryCreateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[] | StoryCreateWithoutAuthorInput | null
  connect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput | null
}

export interface StoryCreateOneWithoutAdditionsInput {
  create?: StoryCreateWithoutAdditionsInput | null
  connect?: StoryWhereUniqueInput | null
}

export interface StoryCreateWithoutAdditionsInput {
  title?: String | null
  openingLine: String
  author?: UserCreateOneWithoutStoriesInput | null
}

export interface StoryCreateWithoutAuthorInput {
  title?: String | null
  openingLine: String
  additions?: AdditionCreateManyWithoutStoryInput | null
}

export interface StoryScalarWhereInput {
  AND?: StoryScalarWhereInput[] | StoryScalarWhereInput | null
  OR?: StoryScalarWhereInput[] | StoryScalarWhereInput | null
  NOT?: StoryScalarWhereInput[] | StoryScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  openingLine?: String | null
  openingLine_not?: String | null
  openingLine_in?: String[] | String | null
  openingLine_not_in?: String[] | String | null
  openingLine_lt?: String | null
  openingLine_lte?: String | null
  openingLine_gt?: String | null
  openingLine_gte?: String | null
  openingLine_contains?: String | null
  openingLine_not_contains?: String | null
  openingLine_starts_with?: String | null
  openingLine_not_starts_with?: String | null
  openingLine_ends_with?: String | null
  openingLine_not_ends_with?: String | null
}

export interface StorySubscriptionWhereInput {
  AND?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput | null
  OR?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput | null
  NOT?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: StoryWhereInput | null
}

export interface StoryUpdateInput {
  title?: String | null
  openingLine?: String | null
  additions?: AdditionUpdateManyWithoutStoryInput | null
  author?: UserUpdateOneWithoutStoriesInput | null
}

export interface StoryUpdateManyDataInput {
  title?: String | null
  openingLine?: String | null
}

export interface StoryUpdateManyMutationInput {
  title?: String | null
  openingLine?: String | null
}

export interface StoryUpdateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[] | StoryCreateWithoutAuthorInput | null
  connect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput | null
  set?: StoryWhereUniqueInput[] | StoryWhereUniqueInput | null
  disconnect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput | null
  delete?: StoryWhereUniqueInput[] | StoryWhereUniqueInput | null
  update?: StoryUpdateWithWhereUniqueWithoutAuthorInput[] | StoryUpdateWithWhereUniqueWithoutAuthorInput | null
  updateMany?: StoryUpdateManyWithWhereNestedInput[] | StoryUpdateManyWithWhereNestedInput | null
  deleteMany?: StoryScalarWhereInput[] | StoryScalarWhereInput | null
  upsert?: StoryUpsertWithWhereUniqueWithoutAuthorInput[] | StoryUpsertWithWhereUniqueWithoutAuthorInput | null
}

export interface StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput
  data: StoryUpdateManyDataInput
}

export interface StoryUpdateOneRequiredWithoutAdditionsInput {
  create?: StoryCreateWithoutAdditionsInput | null
  connect?: StoryWhereUniqueInput | null
  update?: StoryUpdateWithoutAdditionsDataInput | null
  upsert?: StoryUpsertWithoutAdditionsInput | null
}

export interface StoryUpdateWithoutAdditionsDataInput {
  title?: String | null
  openingLine?: String | null
  author?: UserUpdateOneWithoutStoriesInput | null
}

export interface StoryUpdateWithoutAuthorDataInput {
  title?: String | null
  openingLine?: String | null
  additions?: AdditionUpdateManyWithoutStoryInput | null
}

export interface StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput
  data: StoryUpdateWithoutAuthorDataInput
}

export interface StoryUpsertWithoutAdditionsInput {
  update: StoryUpdateWithoutAdditionsDataInput
  create: StoryCreateWithoutAdditionsInput
}

export interface StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput
  update: StoryUpdateWithoutAuthorDataInput
  create: StoryCreateWithoutAuthorInput
}

export interface StoryWhereInput {
  AND?: StoryWhereInput[] | StoryWhereInput | null
  OR?: StoryWhereInput[] | StoryWhereInput | null
  NOT?: StoryWhereInput[] | StoryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  openingLine?: String | null
  openingLine_not?: String | null
  openingLine_in?: String[] | String | null
  openingLine_not_in?: String[] | String | null
  openingLine_lt?: String | null
  openingLine_lte?: String | null
  openingLine_gt?: String | null
  openingLine_gte?: String | null
  openingLine_contains?: String | null
  openingLine_not_contains?: String | null
  openingLine_starts_with?: String | null
  openingLine_not_starts_with?: String | null
  openingLine_ends_with?: String | null
  openingLine_not_ends_with?: String | null
  additions_every?: AdditionWhereInput | null
  additions_some?: AdditionWhereInput | null
  additions_none?: AdditionWhereInput | null
  author?: UserWhereInput | null
}

export interface StoryWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  stories?: StoryCreateManyWithoutAuthorInput | null
  additions?: AdditionCreateManyWithoutWrittenByInput | null
}

export interface UserCreateOneWithoutAdditionsInput {
  create?: UserCreateWithoutAdditionsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutStoriesInput {
  create?: UserCreateWithoutStoriesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutAdditionsInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  stories?: StoryCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutStoriesInput {
  name: String
  email: String
  password: String
  accessRole: AccessRole
  additions?: AdditionCreateManyWithoutWrittenByInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  name?: String | null
  email?: String | null
  password?: String | null
  accessRole?: AccessRole | null
  stories?: StoryUpdateManyWithoutAuthorInput | null
  additions?: AdditionUpdateManyWithoutWrittenByInput | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  email?: String | null
  password?: String | null
  accessRole?: AccessRole | null
}

export interface UserUpdateOneWithoutAdditionsInput {
  create?: UserCreateWithoutAdditionsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutAdditionsDataInput | null
  upsert?: UserUpsertWithoutAdditionsInput | null
}

export interface UserUpdateOneWithoutStoriesInput {
  create?: UserCreateWithoutStoriesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutStoriesDataInput | null
  upsert?: UserUpsertWithoutStoriesInput | null
}

export interface UserUpdateWithoutAdditionsDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  accessRole?: AccessRole | null
  stories?: StoryUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutStoriesDataInput {
  name?: String | null
  email?: String | null
  password?: String | null
  accessRole?: AccessRole | null
  additions?: AdditionUpdateManyWithoutWrittenByInput | null
}

export interface UserUpsertWithoutAdditionsInput {
  update: UserUpdateWithoutAdditionsDataInput
  create: UserCreateWithoutAdditionsInput
}

export interface UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput
  create: UserCreateWithoutStoriesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  accessRole?: AccessRole | null
  accessRole_not?: AccessRole | null
  accessRole_in?: AccessRole[] | AccessRole | null
  accessRole_not_in?: AccessRole[] | AccessRole | null
  stories_every?: StoryWhereInput | null
  stories_some?: StoryWhereInput | null
  stories_none?: StoryWhereInput | null
  additions_every?: AdditionWhereInput | null
  additions_some?: AdditionWhereInput | null
  additions_none?: AdditionWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
  email?: String | null
  password?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Addition extends Node {
  id: ID_Output
  createdAt: DateTime
  text: String
  story: Story
  writtenBy?: User | null
}

/*
 * A connection to a list of items.

 */
export interface AdditionConnection {
  pageInfo: PageInfo
  edges: Array<AdditionEdge | null>
  aggregate: AggregateAddition
}

/*
 * An edge in a connection.

 */
export interface AdditionEdge {
  node: Addition
  cursor: String
}

export interface AdditionPreviousValues {
  id: ID_Output
  createdAt: DateTime
  text: String
}

export interface AdditionSubscriptionPayload {
  mutation: MutationType
  node?: Addition | null
  updatedFields?: Array<String> | null
  previousValues?: AdditionPreviousValues | null
}

export interface AggregateAddition {
  count: Int
}

export interface AggregateStory {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Story extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title?: String | null
  openingLine: String
  additions?: Array<Addition> | null
  author?: User | null
}

/*
 * A connection to a list of items.

 */
export interface StoryConnection {
  pageInfo: PageInfo
  edges: Array<StoryEdge | null>
  aggregate: AggregateStory
}

/*
 * An edge in a connection.

 */
export interface StoryEdge {
  node: Story
  cursor: String
}

export interface StoryPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title?: String | null
  openingLine: String
}

export interface StorySubscriptionPayload {
  mutation: MutationType
  node?: Story | null
  updatedFields?: Array<String> | null
  previousValues?: StoryPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  accessRole: AccessRole
  stories?: Array<Story> | null
  additions?: Array<Addition> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  accessRole: AccessRole
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string