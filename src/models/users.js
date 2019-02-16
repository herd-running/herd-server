const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getOne(userId) {
  return (
    knex('users')
      .where({ 'id': userId })
  )
}

function getUserByUsername(username) {
  return (
    knex('users')
      .where({ 'username': username })
      .first()
  )
}

function create(first_name, last_name, email, username, password, picture_url) {
  return getUserByUsername(username)
    .then((data) => {
      if (data) throw { status: 400, message: 'Username already exists' }

      return bcrypt.hash(password, 10)
    })
    .then((password) => {
      return (
        knex('users')
          .insert({ first_name, last_name, email, username, hashed_password: password, picture_url })
          .returning('*')
      )
    })
    .then(function ([data]) {
      delete data.hashed_password
      return data
    })
}

function getUsersGroups(userId) {
  return knex('groups')
  .join('users_groups', 'groups.id', 'users_groups.group_id')
  .where({'user_id': userId})
}

//the gruops the user is not a member of yet (for discovery)
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

function getUserRuns(userId) {
  return knex('runs')
    .join('users_runs', 'runs.id', 'users_runs.run_id')
    .join('users', 'users.id', 'users_runs.user_id')
    .join('groups', 'groups.id', 'runs.group_id')
    .where({ 'users.id': userId })
}

//the runs the user is not participating in yet (for discovery)
function getNewRuns(userId) {
  return getUserRuns(userId)
    .then(myRuns => {
      return knex('runs')
        .select('runs.*','groups.name')
        .join('users_runs', 'runs.id', 'users_runs.run_id')
        .join('users', 'users.id', 'users_runs.user_id')
        .join('groups', 'groups.id', 'runs.group_id')
        .whereNotIn('runs.id', myRuns.map(e => e.run_id))
        .distinct('runs.id')
    })
}


module.exports = {
  getOne,
  getUserByUsername,
  create,
  getUsersGroups,
  getNewGroups,
  getUserRuns,
  getNewRuns
}