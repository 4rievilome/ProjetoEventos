import { Sequelize } from 'sequelize';
import { info } from './info';

export const sequelize = new Sequelize(info.DB, info.USER, info.PASSWORD, {
  dialect: 'postgres',
  host: info.HOST,
  port: info.PORT,
});

sequelize.sync({ force: false });
