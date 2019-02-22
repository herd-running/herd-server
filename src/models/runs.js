const knex = require('../../db/index')
const userModel = require('./users')

function getOne(runId) {
  return knex('runs')
    .where({ 'runs.id': runId })
    .first()
    .then(run => {
      if (!run) return run
      if (!run['group_id']) {
        return userModel.getRunRating(run.id)
          .then(result => {
            const rating = Math.floor(parseInt(result.avg))
            run.rating = rating
            return userModel.getRunCreator(run.id)
          })
          .then(result => {
            run.creator = `${result.first_name} ${result.last_name}`
            return run
          })
      }
      else {
        return knex('runs')
          .select('groups.name', 'runs.id as id', 'creator_id', 'group_id', 'day', 'date', 'time', 'location', 'latitude', 'longitude', 'run_type', 'terrain', 'pace', 'distance', 'runs.description')
          .join('groups', 'groups.id', 'runs.group_id')
          .where({ 'runs.id': runId })
          .first()
          .then(run => {
            return userModel.getRunRating(run.id)
              .then(result => {
                const rating = Math.floor(parseInt(result.avg))
                run.rating = rating
                return userModel.getRunCreator(run.id)
              })
              .then(result => {
                run.creator = `${result.first_name} ${result.last_name}`
                return run
              })
          })
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
    .where({ 'run_id': runId })
    .then(data => {
      for (user of data) {
        delete user.hashed_password
      }
      return data
    })
}

function addUserToRun(run_id, user_id) {
  return knex('users_runs')
    .insert({ run_id, user_id })
    .returning('*')
}

function removeUserFromRun(run_id, user_id) {
  return knex('users_runs')
    .del()
    .where({ run_id, user_id })
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