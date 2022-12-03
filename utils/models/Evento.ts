import { DataTypes } from 'sequelize';
import { connect } from '../SequelizeConnect';

export const Eventos = connect.define('eventos', {
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
  },
  capacidadeMax: {
    type: DataTypes.INTEGER,
  },
  tema: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  palestrantes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
