import { CarsRepositoryInMemory } from "../../infra/repositories/inMemory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { AppError } from '../../../../errors/AppError';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create Car Specification", () => {
  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
  });

  it("should be able add a new car specification", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "AAA-1111",
      fine_amount: 60,
      brand: "test brand",
      category_id: "category",
    });

    const car_id = car.id;
    const specifications_id = "54321";

    createCarSpecificationUseCase.execute({ car_id, specifications_id });
  });


  it("should not be able add a specification to non existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = "54321";

      createCarSpecificationUseCase.execute({ car_id, specifications_id });
    }).rejects.toBeInstanceOf(AppError);

  });
})