import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository";

interface ICreateCategory {
  name: string,
  description: string,
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategory) {
    const nameAlreayInUse = this.categoriesRepository.findByName(name);

    if (nameAlreayInUse)
      throw new Error("name already exists!");

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };