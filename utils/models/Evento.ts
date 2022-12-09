import { DataTypes, Model } from 'sequelize';
import { sequelize } from 'utils/SequelizeConnect';

export class Eventos extends Model {}

Eventos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nomeEvento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacidadeMax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    palestrantes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'eventos',
  },
);
