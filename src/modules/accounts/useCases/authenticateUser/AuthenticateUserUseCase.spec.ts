import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../infra/repositories/inMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "123",
      email: "test@email.com",
      password: "test",
      name: "user test"
    }
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    })

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "safasduifh",
        password: "adshfasdfh"
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with wrond password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "123",
        email: "test@email.com",
        password: "test",
        name: "user test"
      }

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "sadsfhsidaufh"
      })
    }).rejects.toBeInstanceOf(AppError);
  });
});