const knex = require('../../db/index')

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

function getOne(runId) {
  return knex('runs')
    .select('groups.*', 'runs.id as id', 'day', 'date', 'time', 'location', 'run_type', 'terrain', 'pace', 'distance', 'runs.description')
    .join('groups', 'groups.id', 'runs.group_id')
    .where({ 'runs.id': runId })
}

function getGroupRuns(groupId) {
  return knex('runs')
    .select('groups.*', 'runs.id as id', 'day', 'date', 'time', 'location', 'run_type')
    .join('groups', 'groups.id', 'runs.group_id')
    .where({ 'group_id': groupId })
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


module.exports = {
  getUserRuns,
  getNewRuns,
  getGroupRuns,
  getOne,
  create,
  remove
}