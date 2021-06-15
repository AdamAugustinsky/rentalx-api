import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import { ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification | undefined>{
    const specification = await this.repository.findOne({
      name,
    });

    return specification;
  }
}

export { SpecificationsRepository }