/* Au début de chaque fichier faire un descriptif de ce qu'il fait/à quoi il sert */

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
      this.belongsTo(models.City);
      this.hasMany(models.Booking);
    }
  }
  Place.init(
    {
      city: DataTypes.STRING,
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
