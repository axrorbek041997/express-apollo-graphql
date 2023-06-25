import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./dev.sqlite3",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: ['./database/migrations/*.ts'],
  subscribers: [],
});
