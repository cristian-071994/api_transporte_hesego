"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Brigades", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brigadeName: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      driver: {
        type: Sequelize.STRING(80),
      },
      process: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      contract: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      sede: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Sedes",
          key: "id",
        },
      },
      assignedVehicle: {
        type: Sequelize.STRING(6),
        references: {
          model: "Vehicles",
          key: "licensePlate",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Brigades");
  },
};
