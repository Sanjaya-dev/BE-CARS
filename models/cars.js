'use strict';
const {
  Model
} = require('sequelize');
// const car_category = require('./car_category');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cars.belongsTo(models.car_category,{foreignKey: 'car_category'});

    }
  }
  Cars.init({
    car_name: DataTypes.STRING,
    rent_per_day: DataTypes.FLOAT,
    car_category: DataTypes.INTEGER,
    car_photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};