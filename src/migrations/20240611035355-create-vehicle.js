'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      licensePlate: {
        type: Sequelize.STRING(6),
        allowNull: false,
        primaryKey: true
      },
      vehicleType: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      vehicleBrand: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      vehicleLine: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      vehicleModel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fuel: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      soatExpirationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tecnoExpirationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      owner: {
        type: Sequelize.STRING(80),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};