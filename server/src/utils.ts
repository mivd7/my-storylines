import * as jwt from "jsonwebtoken";
import { Prisma } from "./generated/prisma";

export interface Context {
  db: Prisma;
  request: any;
}

export function getUserId(context) {
  if (context.request.session.userId) {
    return context.request.session.userId;
  }
  throw new AuthError
}

export class AuthError extends Error {
  constructor() {
    super("Login Error: Not authorized");
  }
}