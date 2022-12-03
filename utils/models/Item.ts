import { DataTypes } from 'sequelize';
import { connect } from '../SequelizeConnect';

export const Itens = connect.define('itens', {
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
});
