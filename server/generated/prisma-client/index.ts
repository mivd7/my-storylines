// Code generated by Prisma (prisma@1.23.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  comment: (where?: CommentWhereInput) => Promise<boolean>;
  story: (where?: StoryWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  comment: (where: CommentWhereUniqueInput) => CommentPromise;
  comments: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Comment>;
  commentsConnection: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CommentConnectionPromise;
  story: (where: StoryWhereUniqueInput) => StoryPromise;
  stories: (
    args?: {
      where?: StoryWhereInput;
      orderBy?: StoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Story>;
  storiesConnection: (
    args?: {
      where?: StoryWhereInput;
      orderBy?: StoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => StoryConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComment: (data: CommentCreateInput) => CommentPromise;
  updateComment: (
    args: { data: CommentUpdateInput; where: CommentWhereUniqueInput }
  ) => CommentPromise;
  updateManyComments: (
    args: { data: CommentUpdateManyMutationInput; where?: CommentWhereInput }
  ) => BatchPayloadPromise;
  upsertComment: (
    args: {
      where: CommentWhereUniqueInput;
      create: CommentCreateInput;
      update: CommentUpdateInput;
    }
  ) => CommentPromise;
  deleteComment: (where: CommentWhereUniqueInput) => CommentPromise;
  deleteManyComments: (where?: CommentWhereInput) => BatchPayloadPromise;
  createStory: (data: StoryCreateInput) => StoryPromise;
  updateStory: (
    args: { data: StoryUpdateInput; where: StoryWhereUniqueInput }
  ) => StoryPromise;
  updateManyStories: (
    args: { data: StoryUpdateManyMutationInput; where?: StoryWhereInput }
  ) => BatchPayloadPromise;
  upsertStory: (
    args: {
      where: StoryWhereUniqueInput;
      create: StoryCreateInput;
      update: StoryUpdateInput;
    }
  ) => StoryPromise;
  deleteStory: (where: StoryWhereUniqueInput) => StoryPromise;
  deleteManyStories: (where?: StoryWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comment: (
    where?: CommentSubscriptionWhereInput
  ) => CommentSubscriptionPayloadSubscription;
  story: (
    where?: StorySubscriptionWhereInput
  ) => StorySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AccessRole = "USER" | "ADMIN";

export type StoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "content_ASC"
  | "content_DESC"
  | "published_ASC"
  | "published_DESC";

export type CommentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "text_ASC"
  | "text_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "accessRole_ASC"
  | "accessRole_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CommentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface StoryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  AND?: StoryWhereInput[] | StoryWhereInput;
  OR?: StoryWhereInput[] | StoryWhereInput;
  NOT?: StoryWhereInput[] | StoryWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  accessRole?: AccessRole;
  accessRole_not?: AccessRole;
  accessRole_in?: AccessRole[] | AccessRole;
  accessRole_not_in?: AccessRole[] | AccessRole;
  stories_every?: StoryWhereInput;
  stories_some?: StoryWhereInput;
  stories_none?: StoryWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface CommentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  writtenBy?: UserWhereInput;
  AND?: CommentWhereInput[] | CommentWhereInput;
  OR?: CommentWhereInput[] | CommentWhereInput;
  NOT?: CommentWhereInput[] | CommentWhereInput;
}

export type StoryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface CommentCreateInput {
  text: String;
  writtenBy: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  name?: String;
  email: String;
  accessRole: AccessRole;
  stories?: StoryCreateManyWithoutAuthorInput;
}

export interface StoryCreateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[] | StoryCreateWithoutAuthorInput;
  connect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput;
}

export interface StoryCreateWithoutAuthorInput {
  content: String;
  published?: Boolean;
}

export interface CommentUpdateInput {
  text?: String;
  writtenBy?: UserUpdateOneRequiredInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateDataInput {
  name?: String;
  email?: String;
  accessRole?: AccessRole;
  stories?: StoryUpdateManyWithoutAuthorInput;
}

export interface StoryUpdateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[] | StoryCreateWithoutAuthorInput;
  delete?: StoryWhereUniqueInput[] | StoryWhereUniqueInput;
  connect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput;
  disconnect?: StoryWhereUniqueInput[] | StoryWhereUniqueInput;
  update?:
    | StoryUpdateWithWhereUniqueWithoutAuthorInput[]
    | StoryUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | StoryUpsertWithWhereUniqueWithoutAuthorInput[]
    | StoryUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: StoryScalarWhereInput[] | StoryScalarWhereInput;
  updateMany?:
    | StoryUpdateManyWithWhereNestedInput[]
    | StoryUpdateManyWithWhereNestedInput;
}

export interface StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput;
  data: StoryUpdateWithoutAuthorDataInput;
}

export interface StoryUpdateWithoutAuthorDataInput {
  content?: String;
  published?: Boolean;
}

export interface StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput;
  update: StoryUpdateWithoutAuthorDataInput;
  create: StoryCreateWithoutAuthorInput;
}

export interface StoryScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  AND?: StoryScalarWhereInput[] | StoryScalarWhereInput;
  OR?: StoryScalarWhereInput[] | StoryScalarWhereInput;
  NOT?: StoryScalarWhereInput[] | StoryScalarWhereInput;
}

export interface StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput;
  data: StoryUpdateManyDataInput;
}

export interface StoryUpdateManyDataInput {
  content?: String;
  published?: Boolean;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface CommentUpdateManyMutationInput {
  text?: String;
}

export interface StoryCreateInput {
  content: String;
  published?: Boolean;
  author?: UserCreateOneWithoutStoriesInput;
}

export interface UserCreateOneWithoutStoriesInput {
  create?: UserCreateWithoutStoriesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutStoriesInput {
  name?: String;
  email: String;
  accessRole: AccessRole;
}

export interface StoryUpdateInput {
  content?: String;
  published?: Boolean;
  author?: UserUpdateOneWithoutStoriesInput;
}

export interface UserUpdateOneWithoutStoriesInput {
  create?: UserCreateWithoutStoriesInput;
  update?: UserUpdateWithoutStoriesDataInput;
  upsert?: UserUpsertWithoutStoriesInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutStoriesDataInput {
  name?: String;
  email?: String;
  accessRole?: AccessRole;
}

export interface UserUpsertWithoutStoriesInput {
  update: UserUpdateWithoutStoriesDataInput;
  create: UserCreateWithoutStoriesInput;
}

export interface StoryUpdateManyMutationInput {
  content?: String;
  published?: Boolean;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  accessRole?: AccessRole;
  stories?: StoryUpdateManyWithoutAuthorInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  accessRole?: AccessRole;
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CommentWhereInput;
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
}

export interface StorySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: StoryWhereInput;
  AND?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput;
  OR?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput;
  NOT?: StorySubscriptionWhereInput[] | StorySubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Comment {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
}

export interface CommentPromise extends Promise<Comment>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  writtenBy: <T = UserPromise>() => T;
}

export interface CommentSubscription
  extends Promise<AsyncIterator<Comment>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
  writtenBy: <T = UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name?: String;
  email: String;
  accessRole: AccessRole;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  accessRole: () => Promise<AccessRole>;
  stories: <T = FragmentableArray<Story>>(
    args?: {
      where?: StoryWhereInput;
      orderBy?: StoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  accessRole: () => Promise<AsyncIterator<AccessRole>>;
  stories: <T = Promise<AsyncIterator<StorySubscription>>>(
    args?: {
      where?: StoryWhereInput;
      orderBy?: StoryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Story {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
  published?: Boolean;
}

export interface StoryPromise extends Promise<Story>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  content: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface StorySubscription
  extends Promise<AsyncIterator<Story>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  content: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface CommentConnection {
  pageInfo: PageInfo;
  edges: CommentEdge[];
}

export interface CommentConnectionPromise
  extends Promise<CommentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CommentEdge>>() => T;
  aggregate: <T = AggregateCommentPromise>() => T;
}

export interface CommentConnectionSubscription
  extends Promise<AsyncIterator<CommentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CommentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCommentSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CommentEdge {
  node: Comment;
  cursor: String;
}

export interface CommentEdgePromise extends Promise<CommentEdge>, Fragmentable {
  node: <T = CommentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CommentEdgeSubscription
  extends Promise<AsyncIterator<CommentEdge>>,
    Fragmentable {
  node: <T = CommentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateComment {
  count: Int;
}

export interface AggregateCommentPromise
  extends Promise<AggregateComment>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCommentSubscription
  extends Promise<AsyncIterator<AggregateComment>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface StoryConnection {
  pageInfo: PageInfo;
  edges: StoryEdge[];
}

export interface StoryConnectionPromise
  extends Promise<StoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StoryEdge>>() => T;
  aggregate: <T = AggregateStoryPromise>() => T;
}

export interface StoryConnectionSubscription
  extends Promise<AsyncIterator<StoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStorySubscription>() => T;
}

export interface StoryEdge {
  node: Story;
  cursor: String;
}

export interface StoryEdgePromise extends Promise<StoryEdge>, Fragmentable {
  node: <T = StoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StoryEdgeSubscription
  extends Promise<AsyncIterator<StoryEdge>>,
    Fragmentable {
  node: <T = StorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStory {
  count: Int;
}

export interface AggregateStoryPromise
  extends Promise<AggregateStory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStorySubscription
  extends Promise<AsyncIterator<AggregateStory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CommentSubscriptionPayload {
  mutation: MutationType;
  node: Comment;
  updatedFields: String[];
  previousValues: CommentPreviousValues;
}

export interface CommentSubscriptionPayloadPromise
  extends Promise<CommentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CommentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CommentPreviousValuesPromise>() => T;
}

export interface CommentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CommentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CommentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CommentPreviousValuesSubscription>() => T;
}

export interface CommentPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
}

export interface CommentPreviousValuesPromise
  extends Promise<CommentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
}

export interface CommentPreviousValuesSubscription
  extends Promise<AsyncIterator<CommentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface StorySubscriptionPayload {
  mutation: MutationType;
  node: Story;
  updatedFields: String[];
  previousValues: StoryPreviousValues;
}

export interface StorySubscriptionPayloadPromise
  extends Promise<StorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StoryPreviousValuesPromise>() => T;
}

export interface StorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StoryPreviousValuesSubscription>() => T;
}

export interface StoryPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
  published?: Boolean;
}

export interface StoryPreviousValuesPromise
  extends Promise<StoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  content: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface StoryPreviousValuesSubscription
  extends Promise<AsyncIterator<StoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  content: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name?: String;
  email: String;
  accessRole: AccessRole;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  accessRole: () => Promise<AccessRole>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  accessRole: () => Promise<AsyncIterator<AccessRole>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "AccessRole",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Story",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
