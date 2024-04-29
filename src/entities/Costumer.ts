import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";  

@Entity()
export class Costumer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    nit: string;
    @Column()
    creationDate: string;
    @Column()
    typeOfCostumer: string;
    @Column()
    location: string;
    @Column()
    pricesId: number;
    @Column()
    contactInfo: string;
}