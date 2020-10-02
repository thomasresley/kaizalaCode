'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trips', {
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
      tripDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      oilLevels: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      radiatorFluid: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      clutchBrakeFluid: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      fanBelt: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      exhaustPipe: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      fuelTank: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      headLights: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      sideLights: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      indicatorLights: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      reverseLights: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      windScreen: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      sideMirror: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      rearMirror: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      pressure: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      tread: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      spareWheel: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      jackSpanner: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      aidKit: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      triangles: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      extinguisher: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      radio: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      odometerCurrent: {
        type: Sequelize.STRING(20),
      },
      startPoint: {
        type: Sequelize.STRING(20),
      },
      odometerLater: {
        type: Sequelize.STRING(20),
      },
      destination: {
        type: Sequelize.STRING(50),
      },
      status: {
        type: Sequelize.STRING(15),
      },
      comments: {
        type: Sequelize.STRING(300),
      },
      createdAt: Sequelize.DATE,
      updatedAt:  Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trips');
  }
};