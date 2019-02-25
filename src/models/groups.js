const knex = require('../../db/index')

function getOne(groupId) {
  return knex('groups')
    .where({ 'id': groupId })
}

function remove(groupId) {
  return knex('groups')
    .del()
    .where({ 'id': groupId })
    .returning('*')
}

const groupsUsersJoin = (groupId) => knex('users')
  .join('users_groups', 'users.id', 'users_groups.user_id')
  .where({ 'group_id': groupId })

function getGroupUsers(groupId, leader) {
  if (leader) {
    return groupsUsersJoin(groupId).where({ 'users_groups.is_leader': true })
      .then(data => {
        for (user of data) {
          delete user.hashed_password
        }
        return data[0]
      })
  }
  else {
    return groupsUsersJoin(groupId)
      .then(data => {
        for (user of data) {
          delete user.hashed_password
        }
        return data
      })
  }
}

function addUserToGroup (group_id, user_id) {
  return knex('users_groups')
    .insert({ group_id, user_id, is_leader: false })
    .returning('*')
}

function removeUserFromGroup (group_id, user_id) {
  return knex('users_groups')
    .del()
    .where({group_id, user_id})
    .returning('*')
}

function getGroupRuns(groupId) {
  return knex('runs')
    .select('groups.*', 'runs.id as id', 'day', 'date', 'time', 'location', 'run_type')
    .join('groups', 'groups.id', 'runs.group_id')
    .where({ 'group_id': groupId })
}

function getAllComments(group_id) {
  return knex('groups_comments')
  .select('groups_comments.*', 'users.first_name', 'users.last_name')
  .join('users', 'users.id', 'groups_comments.user_id')
  .where({ group_id })
}

function postComment(group_id, user_id, title, comment) {
  return knex('groups_comments')
  .insert({
    group_id,
    user_id,
    title,
    comment
  })
  .returning('*')
}

function removeComment(group_id, comment_id) {
  return knex('groups_comments')
    .del()
    .where({group_id, 'id': comment_id})
    .returning('*')
}


module.exports = {
  getOne,
  remove,
  getGroupUsers,
  addUserToGroup,
  removeUserFromGroup,
  getGroupRuns,
  getAllComments,
  postComment,
  removeComment
}