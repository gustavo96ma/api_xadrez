'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('partidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jogador_brancas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jogador_pretas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      resultado: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['brancas', 'pretas', 'empate']],
        },
      }
      // Se você quiser desativar createdAt e updatedAt diretamente na migração, remova-os aqui.
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('partidas');
  }
};
