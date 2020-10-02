'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accidents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vehicleReg: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      damage: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(300)
      },
      createdAt: Sequelize.DATE,
      updatedAt:  Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('accidents');
  }
};