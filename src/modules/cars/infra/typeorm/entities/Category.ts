import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("categories")
class Category {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at?: Date;

  constructor(name: string, description: string) {
    if(!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.description = description;
  }
}

export { Category }