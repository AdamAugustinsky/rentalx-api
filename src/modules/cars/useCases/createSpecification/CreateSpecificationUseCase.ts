import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface ICreateSpecification {
  name: string,
  description: string,
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: ICreateSpecification) {
    const nameAlreayInUse = this.specificationsRepository.findByName(name);

    if (nameAlreayInUse)
      throw new Error("name already exists!");

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };