import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'utils/SequelizeConnect';

export class Subscriptions extends Model {}

Subscriptions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nomePessoa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'subscriptions',
  },
);
