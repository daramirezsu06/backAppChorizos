import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userName: string;
    @Column()
    password: string;
}
