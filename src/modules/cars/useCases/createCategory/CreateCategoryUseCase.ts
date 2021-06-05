import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';

import { ICategoriesRepository } from "../../infra/typeorm/repositories/ICategoriesRepository";

interface ICreateCategory {
  name: string,
  description: string,
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
    ) {}

  async execute({ name, description }: ICreateCategory): Promise<void> {
    const nameAlreayInUse = await this.categoriesRepository.findByName(name);

    if (nameAlreayInUse)
      throw new AppError("name already exists!");

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };