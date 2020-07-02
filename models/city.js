/* Au début de chaque fichier faire un descriptif de ce qu'il fait/à quoi il sert */

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Place);
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'City',
    }
  );
  return City;
};
