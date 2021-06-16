import { CarsRepositoryInMemory } from "../../infra/repositories/inMemory/CarsRepositoryInMemory";
import { ListAllAvailableCarsUseCase } from "./ListAllAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAllAvailableCarsUseCase: ListAllAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAllAvailableCarsUseCase = new ListAllAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {

    const car = await carsRepositoryInMemory.create(
      {
        name: "test name",
        description: "test description",
        daily_rate: 140.00,
        license_plate: "BBB-2222",
        fine_amount: 100,
        brand: "test brand",
        category_id: "category_id"
      }
    )

    const cars = await listAllAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car])
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create(
      {
        name: "test name",
        description: "test description",
        daily_rate: 140.00,
        license_plate: "BBB-2222",
        fine_amount: 100,
        brand: "test brand",
        category_id: "category_id"
      }
    )

    const cars = await listAllAvailableCarsUseCase.execute({
      name:"test name"
    });

    expect(cars).toEqual([car])
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create(
      {
        name: "test name",
        description: "test description",
        daily_rate: 140.00,
        license_plate: "BBB-2222",
        fine_amount: 100,
        brand: "test brand",
        category_id: "category_id"
      }
    )

    const cars = await listAllAvailableCarsUseCase.execute({
      brand:"test brand"
    });

    expect(cars).toEqual([car])
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create(
      {
        name: "test name",
        description: "test description",
        daily_rate: 140.00,
        license_plate: "BBB-2222",
        fine_amount: 100,
        brand: "test brand",
        category_id: "category_id"
      }
    )

    const cars = await listAllAvailableCarsUseCase.execute({
      category_id:"category_id"
    });

    expect(cars).toEqual([car])
  });
})
