import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

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
      throw new Error("name already exists!");

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };