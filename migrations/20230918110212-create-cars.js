"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      car_name: {
        type: Sequelize.STRING,
      },
      rent_per_day: {
        type: Sequelize.FLOAT,
      },
      car_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Car_categories",
          key: "id",
        },
      },
      car_photo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cars");
  },
};
