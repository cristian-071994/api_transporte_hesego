'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //para revisar---
     /*  Administrator.belongsTo(models.User, { foreignKey: "userId" });
      Administrator.belongsTo(models.Sede, { foreignKey: "sedeId" }); */
    }
  }
  Administrator.init({
    userId: DataTypes.INTEGER,
    sedeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Administrator',
    timestamps: false
  });
  return Administrator;
};