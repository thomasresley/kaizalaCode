'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('customer', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			first_name: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			last_name: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(100),
				allowNull: false,
				unique: true,
			},
			phone: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			latitude: {
				type: Sequelize.DECIMAL(8,6),
				allowNull: true,
			},
			longitude: {
				type: Sequelize.DECIMAL(8,6),
				allowNull: true,
			},
			createdAt: Sequelize.DATE,
			updatedAt:  Sequelize.DATE,
			deletedAt: Sequelize.DATE,
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('customer');
	},
};