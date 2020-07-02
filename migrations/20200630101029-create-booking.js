module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      place: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      checkOut: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      placeId: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: {
            tableName: 'Places',
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
    await queryInterface.dropTable('Bookings');
  },
};
