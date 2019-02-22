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
    .where({ 'user_id': userId })
}

//the groups the user is not a member of yet (for discovery)
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

function createGroup(user_id, name, description) {
  return knex('groups')
    .insert({ name, description })
    .returning('*')
    .then(([data]) => {
      return knex('users_groups')
        .insert({ group_id: data.id, user_id, is_leader: true })
        .returning('*')
    })
}

function getRunRating(runId) {
  return knex('runs')
    .join('runs_comments', 'runs.id', 'runs_comments.run_id')
    .where({ 'runs.id': runId })
    .avg('rating')
    .first()
}

function getRunCreator(runId) {
  return knex('users')
    .select('first_name', 'last_name')
    .join('runs', 'creator_id', 'users.id')
    .where({ 'runs.id': runId })
    .first()
}

function getUserRuns(userId) {
  return knex('runs')
    .select('runs.*', 'users_runs.*')
    .join('users_runs', 'runs.id', 'users_runs.run_id')
    .join('users', 'users.id', 'users_runs.user_id')
    .where({ 'users.id': userId })

    .then(runs => {
      const promises = runs.map(run => {
        return getRunRating(run.run_id)
          .then(result => {
            const rating = Math.floor(parseInt(result.avg))
            run.rating = rating
            return getRunCreator(run.run_id)
          })
          .then(result => {
            run.creator = `${result.first_name} ${result.last_name}`
            return run
          })
      })

      return Promise.all(promises)
    })
}

//the runs the user is not participating in yet (for discovery)
function getNewRuns(userId) {
  return getUserRuns(userId)
    .then(myRuns => {
      return knex('runs')
        .select('runs.*')
        .join('users_runs', 'runs.id', 'users_runs.run_id')
        .join('users', 'users.id', 'users_runs.user_id')
        .whereNotIn('runs.id', myRuns.map(run => run.run_id))
        .distinct('runs.id')
        .then(runs => {
          const promises = runs.map(run => {
            return getRunRating(run.id)
              .then(result => {
                const rating = Math.floor(parseInt(result.avg))
                run.rating = rating
                return getRunCreator(run.id)
              })
              .then(result => {
                run.creator = `${result.first_name} ${result.last_name}`
                return run
              })
          })
          return Promise.all(promises)
        })
    })
}

module.exports = {
  getOne,
  getUserByUsername,
  create,
  getUsersGroups,
  getNewGroups,
  createGroup,
  getRunRating,
  getRunCreator,
  getUserRuns,
  getNewRuns
}