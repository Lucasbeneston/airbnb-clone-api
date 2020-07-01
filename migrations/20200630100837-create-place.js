'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      maxGuests: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      priceByNight: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: {
            tableName: 'Cities',
          },
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Places');
  },
};
