'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partida.init({
    jogador_brancas: DataTypes.INTEGER,
    jogador_pretas: DataTypes.INTEGER,
    data: DataTypes.DATE,
    resultado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partida',
  });
  return Partida;
};