import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICreateCategory {
  name: string,
  description: string,
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategory): Promise<void> {
    const nameAlreayInUse = await this.categoriesRepository.findByName(name);

    if (nameAlreayInUse)
      throw new Error("name already exists!");

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };