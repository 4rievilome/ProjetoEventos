import { Sequelize } from 'sequelize';
import { info } from './info';

export const connect = new Sequelize(info.DB, info.USER, info.PASSWORD, {
  dialect: 'postgres',
  host: info.HOST,
  port: info.PORT,
});

connect.sync({ force: false });
