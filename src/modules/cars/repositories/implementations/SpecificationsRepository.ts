import { Specification } from "../../model/Specification";
import { ICreateCategoryDTO } from "../ICategoriesRepository";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const created_at = new Date();
    const specification = new Specification(
      name,
      description,
      created_at
    );

    this.specification.push(specification);
  }

      findByName(name: string): Specification | undefined {
    const specification = this.specification.find(specification => specification.name === name);

    return specification;
  }
}

export { SpecificationsRepository }