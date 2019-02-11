const knex = require('../../db/index')

function getAll() {
  return knex('groups')
}

function getOne(groupId) {
  return knex('groups')
  .where({ 'id' : groupId })
}

module.exports = {
  getAll,
  getOne
}