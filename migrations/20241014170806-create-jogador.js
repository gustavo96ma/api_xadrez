'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('jogadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Adicione mais colunas se necessário
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('jogadores');
  }
};
