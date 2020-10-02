'use strict';
module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'customer',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			first_name: {
				type: DataTypes.STRING(50)
			},
			last_name: {
				type: DataTypes.STRING(50)
			},
			email: {
				type: DataTypes.STRING(100)
			},
			phone: {
				type: DataTypes.STRING(20)
			},
			latitude: {
				type: DataTypes.DECIMAL(8,6)
			},
			longitude: {
				type: DataTypes.DECIMAL(8,6)
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


