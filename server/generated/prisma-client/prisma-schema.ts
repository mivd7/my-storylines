export const typeDefs = /* GraphQL */ `enum AccessRole {
  USER
  ADMIN
}

type Addition {
  id: ID!
  createdAt: DateTime!
  text: String!
  story: Story!
  writtenBy: User
}

type AdditionConnection {
  pageInfo: PageInfo!
  edges: [AdditionEdge]!
  aggregate: AggregateAddition!
}

input AdditionCreateInput {
  text: String!
  story: StoryCreateOneWithoutAdditionsInput!
  writtenBy: UserCreateOneInput
}

input AdditionCreateManyWithoutStoryInput {
  create: [AdditionCreateWithoutStoryInput!]
  connect: [AdditionWhereUniqueInput!]
}

input AdditionCreateWithoutStoryInput {
  text: String!
  writtenBy: UserCreateOneInput
}

type AdditionEdge {
  node: Addition!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [AdditionScalarWhereInput!]
  OR: [AdditionScalarWhereInput!]
  NOT: [AdditionScalarWhereInput!]
}

type AdditionSubscriptionPayload {
  mutation: MutationType!
  node: Addition
  updatedFields: [String!]
  previousValues: AdditionPreviousValues
}

input AdditionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdditionWhereInput
  AND: [AdditionSubscriptionWhereInput!]
  OR: [AdditionSubscriptionWhereInput!]
  NOT: [AdditionSubscriptionWhereInput!]
}

input AdditionUpdateInput {
  text: String
  story: StoryUpdateOneRequiredWithoutAdditionsInput
  writtenBy: UserUpdateOneInput
}

input AdditionUpdateManyDataInput {
  text: String
}

input AdditionUpdateManyMutationInput {
  text: String
}

input AdditionUpdateManyWithoutStoryInput {
  create: [AdditionCreateWithoutStoryInput!]
  delete: [AdditionWhereUniqueInput!]
  connect: [AdditionWhereUniqueInput!]
  disconnect: [AdditionWhereUniqueInput!]
  update: [AdditionUpdateWithWhereUniqueWithoutStoryInput!]
  upsert: [AdditionUpsertWithWhereUniqueWithoutStoryInput!]
  deleteMany: [AdditionScalarWhereInput!]
  updateMany: [AdditionUpdateManyWithWhereNestedInput!]
}

input AdditionUpdateManyWithWhereNestedInput {
  where: AdditionScalarWhereInput!
  data: AdditionUpdateManyDataInput!
}

input AdditionUpdateWithoutStoryDataInput {
  text: String
  writtenBy: UserUpdateOneInput
}

input AdditionUpdateWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput!
  data: AdditionUpdateWithoutStoryDataInput!
}

input AdditionUpsertWithWhereUniqueWithoutStoryInput {
  where: AdditionWhereUniqueInput!
  update: AdditionUpdateWithoutStoryDataInput!
  create: AdditionCreateWithoutStoryInput!
}

input AdditionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  story: StoryWhereInput
  writtenBy: UserWhereInput
  AND: [AdditionWhereInput!]
  OR: [AdditionWhereInput!]
  NOT: [AdditionWhereInput!]
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
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAddition(data: AdditionCreateInput!): Addition!
  updateAddition(data: AdditionUpdateInput!, where: AdditionWhereUniqueInput!): Addition
  updateManyAdditions(data: AdditionUpdateManyMutationInput!, where: AdditionWhereInput): BatchPayload!
  upsertAddition(where: AdditionWhereUniqueInput!, create: AdditionCreateInput!, update: AdditionUpdateInput!): Addition!
  deleteAddition(where: AdditionWhereUniqueInput!): Addition
  deleteManyAdditions(where: AdditionWhereInput): BatchPayload!
  createStory(data: StoryCreateInput!): Story!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  addition(where: AdditionWhereUniqueInput!): Addition
  additions(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Addition]!
  additionsConnection(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdditionConnection!
  story(where: StoryWhereUniqueInput!): Story
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Story {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String!
  additions(where: AdditionWhereInput, orderBy: AdditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Addition!]
  published: Boolean
  author: User
}

type StoryConnection {
  pageInfo: PageInfo!
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  content: String!
  additions: AdditionCreateManyWithoutStoryInput
  published: Boolean
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
  content: String!
  published: Boolean
  author: UserCreateOneWithoutStoriesInput
}

input StoryCreateWithoutAuthorInput {
  content: String!
  additions: AdditionCreateManyWithoutStoryInput
  published: Boolean
}

type StoryEdge {
  node: Story!
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  content_ASC
  content_DESC
  published_ASC
  published_DESC
}

type StoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String!
  published: Boolean
}

input StoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [StoryScalarWhereInput!]
  OR: [StoryScalarWhereInput!]
  NOT: [StoryScalarWhereInput!]
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
  AND: [StorySubscriptionWhereInput!]
  OR: [StorySubscriptionWhereInput!]
  NOT: [StorySubscriptionWhereInput!]
}

input StoryUpdateInput {
  content: String
  additions: AdditionUpdateManyWithoutStoryInput
  published: Boolean
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateManyDataInput {
  content: String
  published: Boolean
}

input StoryUpdateManyMutationInput {
  content: String
  published: Boolean
}

input StoryUpdateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput!
  data: StoryUpdateManyDataInput!
}

input StoryUpdateOneRequiredWithoutAdditionsInput {
  create: StoryCreateWithoutAdditionsInput
  update: StoryUpdateWithoutAdditionsDataInput
  upsert: StoryUpsertWithoutAdditionsInput
  connect: StoryWhereUniqueInput
}

input StoryUpdateWithoutAdditionsDataInput {
  content: String
  published: Boolean
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateWithoutAuthorDataInput {
  content: String
  additions: AdditionUpdateManyWithoutStoryInput
  published: Boolean
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  additions_every: AdditionWhereInput
  additions_some: AdditionWhereInput
  additions_none: AdditionWhereInput
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [StoryWhereInput!]
  OR: [StoryWhereInput!]
  NOT: [StoryWhereInput!]
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  addition(where: AdditionSubscriptionWhereInput): AdditionSubscriptionPayload
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String
  email: String!
  accessRole: AccessRole!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  email: String!
  accessRole: AccessRole!
  stories: StoryCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutStoriesInput {
  name: String
  email: String!
  accessRole: AccessRole!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  accessRole_ASC
  accessRole_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
  email: String!
  accessRole: AccessRole!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  accessRole: AccessRole
  stories: StoryUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  name: String
  email: String
  accessRole: AccessRole
  stories: StoryUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  accessRole: AccessRole
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutStoriesInput {
  create: UserCreateWithoutStoriesInput
  update: UserUpdateWithoutStoriesDataInput
  upsert: UserUpsertWithoutStoriesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutStoriesDataInput {
  name: String
  email: String
  accessRole: AccessRole
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput!
  create: UserCreateWithoutStoriesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  accessRole: AccessRole
  accessRole_not: AccessRole
  accessRole_in: [AccessRole!]
  accessRole_not_in: [AccessRole!]
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`