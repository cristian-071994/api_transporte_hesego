'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brigade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brigade.belongsTo(models.Sede, {foreignKey:'sede'});
      Brigade.hasOne(models.Vehicle, {foreignKey: 'assignedVehicle'})
      
    }
  }
  Brigade.init({
    brigadeName: DataTypes.STRING,
    driver: DataTypes.STRING,
    process: DataTypes.STRING,
    contract: DataTypes.STRING,
    sede: DataTypes.INTEGER,
    assignedVehicle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brigade',
    timestamps: false
  });
  return Brigade;
};