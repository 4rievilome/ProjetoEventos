import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../SequelizeConnect';

export class Itens extends Model {}

Itens.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nomeItem: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    modelName: 'itens',
  },
);
