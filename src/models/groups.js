const knex = require('../../db/index')

function getUsersGroups(userId) {
  return knex('groups')
  .join('users_groups', 'groups.id', 'users_groups.group_id')
  .where({'user_id': userId})
}

function getNewGroups(userId) {
  return getUsersGroups(userId)
    .then(myGroups => {
      return knex('groups')
        .select('groups.*')
        .join('users_groups', 'groups.id', 'users_groups.group_id')
        .whereNotIn('groups.id', myGroups.map(group => group.group_id))
        .distinct('groups.id')
    })
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
    .where({ 'id': groupId })
    .returning('*')
}

function getAllComments(req, res, next) {

}

function postComment(req, res, next) {

}

function removeComment(req, res, next) {

}


module.exports = {
  getUsersGroups,
  getNewGroups,
  getOne,
  create,
  remove,
  getAllComments,
  postComment,
  removeComment
}