const runModel = require('../models/runs')

function getAll(req, res, next) {
  runModel.getAll()
  .then( data => res.send(data))
  .catch(next)
}

function getOne(req, res, next){
  runModel.getOne(req.params.runId)
  .then( ([data]) => res.send(data))
  .catch(next)
}

function create(req, res, next){
  if(!req.body.time || !req.body.latitude || !req.body.longitude || req.body.run_type || req.body.terrain) {
    return next({ status: 400, message: 'Could not create run'})
  }
  runModel.create(
    req.body.group_id, 
    req.body.creator_id, 
    req.body.day, 
    req.body.date, 
    req.body.time, 
    req.body.location, 
    req.body.latitude, 
    req.body.longitude, 
    req.body.run_type, 
    req.body.terrain, 
    req.body.pace, 
    req.body.distance, 
    req.body.description)
  .then( data => res.status(201).send(data))
  .catch(next)
}

function remove(req, res, next) {
  runModel.remove(req.params.runId)
  .then( data => res.send(data))
  .catch(next)
}

function getAllComments(req, res, next) {

}

function postComment(req, res, next) {

}

function removeComment(req, res, next) {

}


module.exports = {
  getAll, 
  getOne,
  create,
  remove,
  getAllComments,
  postComment,
  removeComment
}