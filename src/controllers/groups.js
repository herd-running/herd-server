const groupModel = require('../models/groups')

function getAll(req, res, next) {
  groupModel.getAll()
  .then( data => {
    res.send(data)
  })
  .catch(next)
}

function getOne(req, res, next){
  groupModel.getOne(req.params.groupId)
  .then( ([data]) => {
    res.send(data)
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.body.name || !req.body.description) {
    return next({ status: 400, message: 'Could not create group'})
  }
  groupModel.create(req.body.name, req.body.description)
  .then(function(data){
    return res.status(201).send(data)
  })
  .catch(next)
}

function remove(req, res, next) {
  groupModel.remove(req.params.groupId)
  .then( data => res.send(data))
  .catch(next)
}


module.exports = {
  getAll, 
  getOne,
  create,
  remove
}