import { DataSource } from "typeorm";
import { User } from "../entities/Users";
import { Credential } from "../entities/Credentials";
import { BD_NAME, BD_PASSWORD, BD_PORT, BD_USER, BD_HOST } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: BD_HOST,
  port: Number(BD_PORT),
  username: BD_USER,
  password: BD_PASSWORD,
  database: BD_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Credential],
  subscribers: [],
  migrations: [],
  // dropSchema: true,
});
