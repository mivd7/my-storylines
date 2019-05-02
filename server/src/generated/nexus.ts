/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AdditionWhereInput: { // input type
    AND?: NexusGenInputs['AdditionWhereInput'][] | null; // [AdditionWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['AdditionWhereInput'][] | null; // [AdditionWhereInput!]
    OR?: NexusGenInputs['AdditionWhereInput'][] | null; // [AdditionWhereInput!]
    story?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    text?: string | null; // String
    text_contains?: string | null; // String
    text_ends_with?: string | null; // String
    text_gt?: string | null; // String
    text_gte?: string | null; // String
    text_in?: string[] | null; // [String!]
    text_lt?: string | null; // String
    text_lte?: string | null; // String
    text_not?: string | null; // String
    text_not_contains?: string | null; // String
    text_not_ends_with?: string | null; // String
    text_not_in?: string[] | null; // [String!]
    text_not_starts_with?: string | null; // String
    text_starts_with?: string | null; // String
    writtenBy?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  AdditionWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  AuthPayloadWhereInput: { // input type
    AND?: NexusGenInputs['AuthPayloadWhereInput'][] | null; // [AuthPayloadWhereInput!]
    NOT?: NexusGenInputs['AuthPayloadWhereInput'][] | null; // [AuthPayloadWhereInput!]
    OR?: NexusGenInputs['AuthPayloadWhereInput'][] | null; // [AuthPayloadWhereInput!]
    token?: string | null; // String
    token_contains?: string | null; // String
    token_ends_with?: string | null; // String
    token_gt?: string | null; // String
    token_gte?: string | null; // String
    token_in?: string[] | null; // [String!]
    token_lt?: string | null; // String
    token_lte?: string | null; // String
    token_not?: string | null; // String
    token_not_contains?: string | null; // String
    token_not_ends_with?: string | null; // String
    token_not_in?: string[] | null; // [String!]
    token_not_starts_with?: string | null; // String
    token_starts_with?: string | null; // String
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  StoryWhereInput: { // input type
    additions_every?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    additions_none?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    additions_some?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    AND?: NexusGenInputs['StoryWhereInput'][] | null; // [StoryWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['StoryWhereInput'][] | null; // [StoryWhereInput!]
    openingLine?: string | null; // String
    openingLine_contains?: string | null; // String
    openingLine_ends_with?: string | null; // String
    openingLine_gt?: string | null; // String
    openingLine_gte?: string | null; // String
    openingLine_in?: string[] | null; // [String!]
    openingLine_lt?: string | null; // String
    openingLine_lte?: string | null; // String
    openingLine_not?: string | null; // String
    openingLine_not_contains?: string | null; // String
    openingLine_not_ends_with?: string | null; // String
    openingLine_not_in?: string[] | null; // [String!]
    openingLine_not_starts_with?: string | null; // String
    openingLine_starts_with?: string | null; // String
    OR?: NexusGenInputs['StoryWhereInput'][] | null; // [StoryWhereInput!]
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  StoryWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserWhereInput: { // input type
    accessRole?: NexusGenEnums['AccessRole'] | null; // AccessRole
    accessRole_in?: NexusGenEnums['AccessRole'][] | null; // [AccessRole!]
    accessRole_not?: NexusGenEnums['AccessRole'] | null; // AccessRole
    accessRole_not_in?: NexusGenEnums['AccessRole'][] | null; // [AccessRole!]
    additions_every?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    additions_none?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    additions_some?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    stories_every?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    stories_none?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    stories_some?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenEnums {
  AccessRole: "ADMIN" | "USER"
  AdditionOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "text_ASC" | "text_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  AuthPayloadOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "token_ASC" | "token_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  StoryOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "openingLine_ASC" | "openingLine_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "accessRole_ASC" | "accessRole_DESC" | "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  Addition: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    text: string; // String!
  }
  AdditionConnection: { // root type
    edges: NexusGenRootTypes['AdditionEdge'][]; // [AdditionEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AdditionEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Addition']; // Addition!
  }
  AggregateAddition: { // root type
    count: number; // Int!
  }
  AggregateAuthPayload: { // root type
    count: number; // Int!
  }
  AggregateStory: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  AuthPayload: { // root type
    token?: string | null; // String
  }
  AuthPayloadConnection: { // root type
    edges: NexusGenRootTypes['AuthPayloadEdge'][]; // [AuthPayloadEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AuthPayloadEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  Story: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    openingLine: string; // String!
    title?: string | null; // String
    updatedAt: any; // DateTime!
  }
  StoryConnection: { // root type
    edges: NexusGenRootTypes['StoryEdge'][]; // [StoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  StoryEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Story']; // Story!
  }
  User: { // root type
    accessRole: NexusGenEnums['AccessRole']; // AccessRole!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AdditionWhereInput: NexusGenInputs['AdditionWhereInput'];
  AdditionWhereUniqueInput: NexusGenInputs['AdditionWhereUniqueInput'];
  AuthPayloadWhereInput: NexusGenInputs['AuthPayloadWhereInput'];
  StoryWhereInput: NexusGenInputs['StoryWhereInput'];
  StoryWhereUniqueInput: NexusGenInputs['StoryWhereUniqueInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  AccessRole: NexusGenEnums['AccessRole'];
  AdditionOrderByInput: NexusGenEnums['AdditionOrderByInput'];
  AuthPayloadOrderByInput: NexusGenEnums['AuthPayloadOrderByInput'];
  StoryOrderByInput: NexusGenEnums['StoryOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  Addition: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    story: NexusGenRootTypes['Story']; // Story!
    text: string; // String!
    writtenBy: NexusGenRootTypes['User'] | null; // User
  }
  AdditionConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateAddition']; // AggregateAddition!
    edges: NexusGenRootTypes['AdditionEdge'][]; // [AdditionEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AdditionEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Addition']; // Addition!
  }
  AggregateAddition: { // field return type
    count: number; // Int!
  }
  AggregateAuthPayload: { // field return type
    count: number; // Int!
  }
  AggregateStory: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  AuthPayloadConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateAuthPayload']; // AggregateAuthPayload!
    edges: NexusGenRootTypes['AuthPayloadEdge'][]; // [AuthPayloadEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AuthPayloadEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    addition: NexusGenRootTypes['Addition'] | null; // Addition
    additions: NexusGenRootTypes['Addition'][]; // [Addition!]!
    additionsConnection: NexusGenRootTypes['AdditionConnection']; // AdditionConnection!
    authPayloads: NexusGenRootTypes['AuthPayload'][]; // [AuthPayload!]!
    authPayloadsConnection: NexusGenRootTypes['AuthPayloadConnection']; // AuthPayloadConnection!
    stories: NexusGenRootTypes['Story'][]; // [Story!]!
    storiesConnection: NexusGenRootTypes['StoryConnection']; // StoryConnection!
    story: NexusGenRootTypes['Story'] | null; // Story
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  Story: { // field return type
    additions: NexusGenRootTypes['Addition'][] | null; // [Addition!]
    author: NexusGenRootTypes['User'] | null; // User
    createdAt: any; // DateTime!
    id: string; // ID!
    openingLine: string; // String!
    title: string | null; // String
    updatedAt: any; // DateTime!
  }
  StoryConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateStory']; // AggregateStory!
    edges: NexusGenRootTypes['StoryEdge'][]; // [StoryEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  StoryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Story']; // Story!
  }
  User: { // field return type
    accessRole: NexusGenEnums['AccessRole']; // AccessRole!
    additions: NexusGenRootTypes['Addition'][] | null; // [Addition!]
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    password: string; // String!
    stories: NexusGenRootTypes['Story'][] | null; // [Story!]
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Query: {
    addition: { // args
      where: NexusGenInputs['AdditionWhereUniqueInput']; // AdditionWhereUniqueInput!
    }
    additions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AdditionOrderByInput'] | null; // AdditionOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    }
    additionsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AdditionOrderByInput'] | null; // AdditionOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    }
    authPayloads: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AuthPayloadOrderByInput'] | null; // AuthPayloadOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AuthPayloadWhereInput'] | null; // AuthPayloadWhereInput
    }
    authPayloadsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AuthPayloadOrderByInput'] | null; // AuthPayloadOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AuthPayloadWhereInput'] | null; // AuthPayloadWhereInput
    }
    stories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['StoryOrderByInput'] | null; // StoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    }
    storiesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['StoryOrderByInput'] | null; // StoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    }
    story: { // args
      where: NexusGenInputs['StoryWhereUniqueInput']; // StoryWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  Story: {
    additions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AdditionOrderByInput'] | null; // AdditionOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    }
  }
  User: {
    additions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['AdditionOrderByInput'] | null; // AdditionOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['AdditionWhereInput'] | null; // AdditionWhereInput
    }
    stories: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['StoryOrderByInput'] | null; // StoryOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['StoryWhereInput'] | null; // StoryWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Addition" | "AdditionConnection" | "AdditionEdge" | "AggregateAddition" | "AggregateAuthPayload" | "AggregateStory" | "AggregateUser" | "AuthPayload" | "AuthPayloadConnection" | "AuthPayloadEdge" | "PageInfo" | "Query" | "Story" | "StoryConnection" | "StoryEdge" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "AdditionWhereInput" | "AdditionWhereUniqueInput" | "AuthPayloadWhereInput" | "StoryWhereInput" | "StoryWhereUniqueInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "AccessRole" | "AdditionOrderByInput" | "AuthPayloadOrderByInput" | "StoryOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}