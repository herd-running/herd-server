const knex = require('../../db/index')

function getOne(runId) {
  return knex('runs')
  .where({ 'runs.id': runId })
  .then(([data]) => {
    if (!data) return data
    if (!data['group_id']) return data
    else {
      return knex('runs')
      .select('groups.name', 'runs.id as id', 'creator_id', 'group_id', 'day', 'date', 'time', 'location', 'run_type', 'terrain', 'pace', 'distance', 'runs.description')
      .join('groups', 'groups.id', 'runs.group_id')
      .where({ 'runs.id': runId })
      .then(([data]) => data)
    }
  })
}

function create(
  group_id,
  creator_id,
  day,
  date,
  time,
  location,
  latitude,
  longitude,
  run_type,
  terrain,
  pace,
  distance,
  description) {
  return knex('runs')
    .insert({
      group_id,
      creator_id,
      day,
      date,
      time,
      location,
      latitude,
      longitude,
      run_type,
      terrain,
      pace,
      distance,
      description
    })
    .returning('*')
    .then(([data]) => {
      return knex('users_runs')
        .insert({ user_id: data.creator_id, run_id: data.id })
        .returning('*')
    })
}

function remove(runId) {
  return knex('runs')
    .del()
    .where({ 'id': runId })
    .returning('*')
}

function getRunUsers(runId) {
  return knex('users')
    .join('users_runs', 'users.id', 'users_runs.user_id')
    .where({'run_id': runId})
    .then(data => {
      for (user of data) {
        delete user.hashed_password
      }
      return data
    })
}

function addUserToRun (run_id, user_id) {
  return knex('users_runs')
    .insert({ run_id, user_id })
    .returning('*')
}

function removeUserFromRun (run_id, user_id) {
  return knex('users_runs')
    .del()
    .where({run_id, user_id})
    .returning('*')
}

module.exports = {
  getOne,
  create,
  remove,
  getRunUsers,
  addUserToRun,
  removeUserFromRun
}