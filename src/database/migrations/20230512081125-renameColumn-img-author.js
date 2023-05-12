'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Authors', 'img', 'photo');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Authors', 'photo', 'img');
  },
};
