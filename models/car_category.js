'use strict';
const {
  Model
} = require('sequelize');
// const cars = require('./cars');
module.exports = (sequelize, DataTypes) => {
  class Car_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Car_category.hasMany(models.Cars,{as:'car'});
    }
  }
  Car_category.init({
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car_category',
  });
  return Car_category;
};