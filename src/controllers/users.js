const userModel = require('../models/users')

function getOne(req, res, next){
  userModel.getOne(req.params.userId)
  .then( ([ data ]) => res.send(data))
  .catch(next)
}

function create(req, res, next){
  if(!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.username || !req.body.password) {
    return next({ status: 400, message: 'Could not create account'})
  }
  userModel.create(req.body.first_name, req.body.last_name, req.body.email, req.body.username, req.body.password, req.body.picture_url )
  .then(function(data){
    return res.status(201).send(data)
  })
  .catch(next)
}

function getGroups(req, res, next) {
  const bool = JSON.parse(req.query.member)
  if (bool) {
    userModel.getUsersGroups(req.params.userId)
      .then(data => res.send(data))
      .catch(next)
  }

  else {
    userModel.getNewGroups(req.params.userId)
      .then(data => res.send(data))
      .catch(next)
  }
}

function createGroup(req, res, next) {
  if (!req.body.name || !req.body.description) {
    return next({ status: 400, message: 'Could not create group' })
  }
  userModel.createGroup(req.params.userId, req.body.name, req.body.description)
    .then(data => res.status(201).send(data))
    .catch(next)
}

function getRuns(req, res, next) {
  const bool = JSON.parse(req.query.running)

  if (bool) {
    userModel.getUserRuns(req.params.userId)
      .then(data => res.send(data))
      .catch(next)
  }

  else {
    userModel.getNewRuns(req.params.userId)
    .then(data => res.send(data))
    .catch(next)
  }
}

module.exports = {
  getOne,
  create,
  getGroups,
  createGroup,
  getRuns
}