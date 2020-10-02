'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn(
                    "trips",
                    "phone",
                    {
                        type: Sequelize.STRING(30),
                        allowNull: true,
                    },
                    { transaction: t }
                ),
            ]);
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn(
                    "trips",
                    "phone",
                    { transaction: t }),
            ]);
        });
    }
};
