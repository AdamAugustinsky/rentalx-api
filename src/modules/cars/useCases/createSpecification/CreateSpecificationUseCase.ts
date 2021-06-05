import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../infra/typeorm/repositories/ISpecificationsRepository";

interface ICreateSpecification {
  name: string,
  description: string,
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
    ) {}

  async execute({ name, description }: ICreateSpecification): Promise<void> {
    const nameAlreayInUse = await this.specificationsRepository.findByName(name);

    if (nameAlreayInUse)
      throw new AppError("name already exists!");

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };