'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'accidents',
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
          damage: {
              type: DataTypes.STRING(15),
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