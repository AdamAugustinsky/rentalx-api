import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { Car } from "../../typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car(
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    );

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAllAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
    const cars = this.cars.filter((car) => {
      if (
        car.available === true ||
        (
          (brand && car.brand === brand) ||
          (category_id && car.category_id === category_id) ||
          (name && car.name === name)
        )
      ) {
        return car;
      } 
      return null;
    })

    return cars;
  }

}

export { CarsRepositoryInMemory }