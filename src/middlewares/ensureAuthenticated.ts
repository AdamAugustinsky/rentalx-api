import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Missing token");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "698dc19d489c4e4db73e28a713eab07b") as IPayLoad;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if(!user) throw new Error("user does not exists");

    next();
  } catch {
    throw new Error("invalid token");
  }
}