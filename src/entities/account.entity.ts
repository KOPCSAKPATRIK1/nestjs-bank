import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @Column()
  balance: number;
}
