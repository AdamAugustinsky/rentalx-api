import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../infra/repositories/ICarsRepository";
import { Car } from "../../infra/typeorm/entities/Car";

interface IRequest { 
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAllAvailableCarsUseCase {

  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = this.carsRepository.findAllAvailable(category_id, brand, name);

    return cars;
  }
}

export { ListAllAvailableCarsUseCase }