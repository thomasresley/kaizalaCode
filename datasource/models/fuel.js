'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'fuel',
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
          fuelStation: {
              type: DataTypes.STRING(20),
              allowNull: false,
          },
          litres: {
              type: DataTypes.INTEGER,
              allowNull: false,
          },
          cost: {
              type: DataTypes.INTEGER,
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