import { v4 as uuidV4 } from "uuid";

class Car {
  id?: string;
  name: string;
  description: string;
  daily_rate: number;
  available?: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  created_at?: Date;

  constructor(
    name: string,
    description: string,
    daily_rate: number,
    license_plate: string,
    fine_amount: number,
    brand: string,
    category_id: string, ) {

    if(!this.id) {
      this.id = uuidV4();
      this.available = true;
      this.created_at = new Date();
    }

    this.name = name;
    this.description = description;
    this.daily_rate = daily_rate;
    this.license_plate = license_plate;
    this.fine_amount = fine_amount;
    this.brand = brand;
    this.category_id = category_id;

  }
}

export { Car };