import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private UsersRepository: IUsersRepository
  ) {}

  execute({name, username, email, password, driver_license}: ICreateUserDTO) {

  }
}

export { CreateUserUseCase }