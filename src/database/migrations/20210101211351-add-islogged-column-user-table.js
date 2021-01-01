'use strict'

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'islogged',
      {
        type: Sequelize.BOOLEAN
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'islogged',
    )
  }
}