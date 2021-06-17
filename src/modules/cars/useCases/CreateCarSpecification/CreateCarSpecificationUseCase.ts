import { ICarsRepository } from "../../infra/repositories/ICarsRepository";
import { AppError } from '../../../../errors/AppError';
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  specifications_id: string;
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({car_id, specifications_id}: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);
    
    if(!carExists) {
      throw new AppError("car does not exists")
    }
  }
}

export { CreateCarSpecificationUseCase }