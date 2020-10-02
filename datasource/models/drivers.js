'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'drivers',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
          firstName: {
              type: DataTypes.STRING(50),
              allowNull: false,
          },
          lastName: {
              type: DataTypes.STRING(50),
              allowNull: false,
          },
          email: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
          phone: {
              type: DataTypes.STRING(20),
              allowNull: false,
          },
          idNo: {
              type: DataTypes.STRING(20),
              allowNull: false,
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