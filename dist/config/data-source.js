"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("../entities/Users");
const Credentials_1 = require("../entities/Credentials");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.BD_HOST,
    port: Number(envs_1.BD_PORT),
    username: envs_1.BD_USER,
    password: envs_1.BD_PASSWORD,
    database: envs_1.BD_NAME,
    synchronize: true,
    logging: false,
    entities: [Users_1.User, Credentials_1.Credential],
    subscribers: [],
    migrations: [],
    // dropSchema: true,
});
