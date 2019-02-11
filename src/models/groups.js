const knex = require('../../db/index')

function getAll() {
  return knex('groups')
}

function getOne(groupId) {
  return knex('groups')
    .where({ 'id': groupId })
}

function create(name, description) {
  return knex('groups')
    .insert({ name, description })
    .returning('*')
}

function remove(groupId) {
  return knex('groups')
    .del()
    .where({ 'groups.id': groupId })
    .returning('*')
}

module.exports = {
  getAll,
  getOne,
  create,
  remove
}