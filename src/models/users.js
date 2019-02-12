const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getOne(userId){
  return (
    knex('users')
    .where({ 'id': userId})
  )
}

function getUserByUsername(username){
  return (
    knex('users')
    .where({ 'username': username })
    .first()
  )
}

function create(first_name, last_name,email, username, password, picture_url){
  return getUserByUsername(username)
  .then( (data) => {
    if(data) throw { status: 400, message:'Username already exists'}

    return bcrypt.hash(password, 10)
  })
  .then( (password) => {
    return (
      knex('users')
      .insert({ first_name, last_name, email, username, hashed_password: password, picture_url })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.hashed_password
    return data
  })
}

function getGroupsUsers(groupId) {
  return knex('users')
  .join('users_groups', 'users.id', 'users_groups.user_id')
  .where({'group_id': groupId})
  .then( data => {
    for(user of data) {
      delete user.hashed_password
    }
    return data
  })
}

module.exports = {
  getOne,
  getUserByUsername,
  create,
  getGroupsUsers
}