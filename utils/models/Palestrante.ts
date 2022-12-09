import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../SequelizeConnect';

export class Palestrantes extends Model {}

Palestrantes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nomePalestrante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    cargo: {
      type: DataTypes.STRING,
    },
    instituicao: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'palestrantes',
  },
);
