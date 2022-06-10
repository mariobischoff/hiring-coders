"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("appointments", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        refereces: { model: "users", key: "id" },
        ouUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      collaborator_id: {
        type: Sequelize.INTEGER,
        refereces: { model: "users", key: "id" },
        ouUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("appointments");
  },
};
