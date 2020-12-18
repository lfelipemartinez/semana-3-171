'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'jero',
      email: 'jero@gmail.com',
      password: '$2a$04$wsaazfc11PdzxpeB.XgPLeDGMMXnZahw.op66jast6LMKgltdKio2',
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    
  }
};
