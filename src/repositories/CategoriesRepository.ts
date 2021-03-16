import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description}: ICreateCategoryDTO): void {

    const created_at = new Date();
    const category = new Category(
      name,
      description,
      created_at
    )

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository }