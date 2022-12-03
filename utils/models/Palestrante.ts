import { DataTypes } from 'sequelize/types';
import { connect } from '../SequelizeConnect';

export const Palestrantes = connect.define('palestrantes', {
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
});
