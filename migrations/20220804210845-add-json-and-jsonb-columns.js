'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'table_1',
      'json_column',
      Sequelize.JSON
    );
    await queryInterface.addColumn(
      'table_1',
      'jsonb_column',
      Sequelize.JSONB
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'table_1',
      'json_column'
    );
    await queryInterface.removeColumn(
      'table_1',
      'jsonb_column'
    );
  }
};
