import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "product"
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    marca: string;

    @Column()
    peso: number;
}