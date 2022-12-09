import { DataTypes, Model } from 'sequelize';
import { Palestrantes } from './Palestrante';
import { sequelize } from 'utils/SequelizeConnect';
import { Subscriptions } from './Subscriptions';
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
  },
  {
    sequelize,
    modelName: 'eventos',
  },
);
Eventos.hasMany(Palestrantes, { foreignKey: 'eventoID' });
Eventos.hasMany(Subscriptions, { foreignKey: 'eventoID' });
