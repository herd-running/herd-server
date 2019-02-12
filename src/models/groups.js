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

function getUsersGroups(userId) {
  return knex('groups')
  .join('users_groups', 'groups.id', 'users_groups.group_id')
  .where({'user_id': userId})
}

function getAllComments(req, res, next) {

}

function postComment(req, res, next) {

}

function removeComment(req, res, next) {

}


module.exports = {
  getAll,
  getOne,
  create,
  remove,
  getUsersGroups,
  getAllComments,
  postComment,
  removeComment
}