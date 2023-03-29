import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  business: boolean;
}
