import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface ICreateCategory {
  name: string,
  description: string,
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateCategory) {
    const nameAlreayInUse = this.specificationsRepository.findByName(name);

    if (nameAlreayInUse)
      throw new Error("name already exists!");

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };