'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
      'diagnosis',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        phone: {
          type: DataTypes.STRING(20)
        },
        symptoms: {
          type: DataTypes.STRING(50)
        },
        diagnosis: {
          type: DataTypes.STRING(50)
        },
        prescription: {
          type: DataTypes.STRING(50)
        },
        quantity: {
          type: DataTypes.INTEGER,
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


