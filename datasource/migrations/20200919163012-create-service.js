'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('service', {
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
      odometer: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      dueDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      garage: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      partsNeeded: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('service');
  }
};