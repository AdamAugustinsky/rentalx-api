import { CarsRepositoryInMemory } from "../../infra/repositories/inMemory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"
import { AppError } from '../../../../errors/AppError';

let inMemoryCarsRepository: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe("Create Car", () => {
  beforeEach(() => {
    inMemoryCarsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(inMemoryCarsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "AAA-1111",
      fine_amount: 60,
      brand: "test brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with existent license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "test name",
        description: "test description",
        daily_rate: 100,
        license_plate: "AAA-1111",
        fine_amount: 60,
        brand: "test brand",
        category_id: "category",
      });

      const test = await createCarUseCase.execute({
        name: "test name",
        description: "test description",
        daily_rate: 100,
        license_plate: "AAA-1111",
        fine_amount: 60,
        brand: "test brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("car should be available by default", async () => {
    const car = await createCarUseCase.execute({
      name: "test name",
      description: "test description",
      daily_rate: 100,
      license_plate: "AAA-1111",
      fine_amount: 60,
      brand: "test brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
})