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
  userModel.create(req.body.first_name, req.body.last_name, req.body.email, req.body.username, req.body.password, req.body.picture_url  )
  .then(function(data){
    return res.status(201).send(data)
  })
  .catch(next)
}

function getGroupsUsers(req, res, next) {
  console.log('controller')
  userModel.getGroupsUsers(req.params.groupId)
  .then(data => res.send(data))
  .catch(next)
}


module.exports = {
  getOne,
  create,
  getGroupsUsers
}