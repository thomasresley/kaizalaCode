'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'trips',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
          phone: {
              type: DataTypes.STRING(30),
              allowNull: true,
          },
          vehicleReg: {
              type: DataTypes.STRING(10),
              allowNull: false,
          },
          tripDate: {
              type: DataTypes.DATE,
              allowNull: false,
          },
          oilLevels: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          radiatorFluid: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          clutchBrakeFluid: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          fanBelt: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          exhaustPipe: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          fuelTank: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          headLights: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          sideLights: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          indicatorLights: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          reverseLights: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          windScreen: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          sideMirror: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          rearMirror: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          pressure: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          tread: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          spareWheel: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          jackSpanner: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          aidKit: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          triangles: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          extinguisher: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          radio: {
              type: DataTypes.STRING(300),
              allowNull: false,
          },
          odometerCurrent: {
              type: DataTypes.STRING(20),
          },
          startPoint: {
              type: DataTypes.STRING(20),
          },
          odometerLater: {
              type: DataTypes.STRING(20),
          },
          destination: {
              type: DataTypes.STRING(50),
          },
          status: {
              type: DataTypes.STRING(15),
          },
          comments: {
              type: DataTypes.STRING(300),
          },
        createdAt: DataTypes.DATE,
        updatedAt:  DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        paranoid: true,
        underscored: false,
        freezeTableName:true,
        defaultScope: {
          attributes: {exclude: []},
        }
      }
  );
};