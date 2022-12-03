import { DataTypes } from 'sequelize/types';
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
  Palestrantes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
