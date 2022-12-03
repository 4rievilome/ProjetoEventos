import { Sequelize } from 'sequelize';

export const connect = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.HOST,
    port: +process.env.PORT,
  },
);

connect.sync({ force: false });
