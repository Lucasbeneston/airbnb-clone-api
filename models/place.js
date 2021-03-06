'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users);
      this.belongsTo(models.City, {
        foreignKey: 'id',
      });
      this.hasMany(models.Booking);
    }
  }
  Place.init(
    {
      user: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      rooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      maxGuests: DataTypes.INTEGER,
      priceByNight: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Place',
    }
  );
  return Place;
};
