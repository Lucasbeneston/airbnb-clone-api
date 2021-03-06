'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users)
      this.belongsTo(models.Place)
    }
  }
  Booking.init(
    {
      place: DataTypes.STRING,
      user: DataTypes.STRING,
      checkIn: DataTypes.DATE,
      checkOut: DataTypes.DATE,
      placeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
