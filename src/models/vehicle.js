'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.belongsTo(models.Brigade, {foreignKey:'assignedVehicle'})
    }
  }
  Vehicle.init({
    licensePlate: DataTypes.STRING,
    vehicleType: DataTypes.STRING,
    vehicleBrand: DataTypes.STRING,
    vehicleLine: DataTypes.STRING,
    vehicleModel: DataTypes.INTEGER,
    fuel: DataTypes.STRING,
    soatExpirationDate: DataTypes.DATE,
    tecnoExpirationDate: DataTypes.DATE,
    owner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicle',
    timestamps: false
  });
  return Vehicle;
};