const knex = require('../../db/index')

function getOne(runId) {
  return knex('runs')
    .select('groups.*', 'runs.id as id', 'day', 'date', 'time', 'location', 'run_type', 'terrain', 'pace', 'distance', 'runs.description')
    .join('groups', 'groups.id', 'runs.group_id')
    .where({ 'runs.id': runId })
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


module.exports = {
  getOne,
  create,
  remove,
  getRunUsers
}