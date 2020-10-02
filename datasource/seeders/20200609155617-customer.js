'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "customer",
        [
          {
            first_name: "Thomas",
            last_name: "Rakwach",
            phone: "254719232782",
            email: "thomasrakwach@gmail.com",
            latitude: "-34.789090",
              longitude: "78.456456",
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("customer", null, {});
  }
};
