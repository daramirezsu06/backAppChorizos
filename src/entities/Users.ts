import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: string;

  @Column()
  cedula: string;
    
  @Column()
  role: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credentials: Credential
    
}
