"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sede extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sede.hasMany(models.Brigade, { foreignKey: "sede" });
      Sede.belongsToMany(models.User, {
        through: models.Administrator,
        foreignKey: "sedeId",
      });
    }
  }
  Sede.init(
    {
      sedeName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sede",
      timestamps: false,
    }
  );
  return Sede;
};
