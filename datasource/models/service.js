'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'service',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
          vehicleReg: {
              type: DataTypes.STRING(10),
              allowNull: false,
          },
          odometer: {
              type: DataTypes.STRING(15),
              allowNull: false,
          },
          dueDate: {
              type: DataTypes.DATE,
              allowNull: false,
          },
          garage: {
              type: DataTypes.STRING(20),
              allowNull: false,
          },
          partsNeeded: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
          comments: {
              type: DataTypes.STRING(300)
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