import { v4 as uuidV4 } from "uuid";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {

  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean = true;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({name: "category_id"})
  category: Category | undefined;

  @Column()
  category_id: string;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: "specifications_cars",
    joinColumns: [{name: "car_id"}],
    inverseJoinColumn: [{name: "specification_id"}],
  })
  specifications: Specification[] | undefined;

  @Column()
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