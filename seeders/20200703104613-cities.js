'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Cities',
      [
        {
          id: 1,
          name: 'Paris',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Dijon',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Rennes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Bordeaux',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Marseille',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: 'Montpellier',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: 'Strasbourg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: 'Lille',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: 'Lyon',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: 'Nice',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: 'Saint-Etienne',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: 'Nantes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: 'Toulouse',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: 'Brest',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: 'Metz',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
