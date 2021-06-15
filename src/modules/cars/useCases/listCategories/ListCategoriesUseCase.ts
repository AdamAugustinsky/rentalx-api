import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../infra/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
    ) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase }