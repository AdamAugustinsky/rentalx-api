import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Missing token");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "698dc19d489c4e4db73e28a713eab07b") as IPayLoad;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if(!user) throw new AppError("user does not exists", 401);

    next();
  } catch {
    throw new AppError("invalid token", 401);
  }
}