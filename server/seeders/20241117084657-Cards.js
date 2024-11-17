'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cards', [
      {
        name: 'The Fool',
        position: 'Upright'
      },
      {
        name: 'The Fool',
        position: 'Reversed'
      },
      {
        name: 'The Magician',
        position: 'Upright'
      },
      {
        name: 'The Magician',
        position: 'Reversed'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cards, null, {}');
  }
};
