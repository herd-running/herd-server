const runModel = require('../models/runs')

function getOne(req, res, next) {
  runModel.getOne(req.params.runId)
    .then(data => res.send(data))
    .catch(next)
}

function create(req, res, next) {
  if (!req.body.creator_id || !req.body.time || !req.body.location || !req.body.latitude || !req.body.longitude || !req.body.run_type || !req.body.terrain) {
    return next({ status: 400, message: 'Could not create run' })
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
    .then(data => res.status(201).send(data))
    .catch(next)
}

function remove(req, res, next) {
  runModel.remove(req.params.runId)
    .then(data => res.send(data))
    .catch(next)
}

function getRunUsers(req, res, next) {
  runModel.getRunUsers(req.params.runId)
    .then(data => res.send(data))
    .catch(next)
}

function addUserToRun(req, res, next) {
  runModel.addUserToRun(req.params.runId, req.params.userId)
    .then(data => res.send(data))
    .catch(next)
}

function removeUserFromRun(req, res, next) {
  runModel.removeUserFromRun(req.params.runId, req.params.userId)
    .then(data => res.send(data))
    .catch(next)
}

function getAllComments(req, res, next) {
  runModel.getAllComments(req.params.runId)
    .then(data => res.send(data))
    .catch(next)
}

function postComment(req, res, next) {
  if (!req.body.user_id || !req.body.title || !req.body.rating || !req.body.comment) {
    return next({ status: 400, message: 'Could not post comment' })
  }
  runModel.postComment(
    req.params.runId,
    req.body.user_id,
    req.body.title,
    req.body.comment,
    req.body.rating)
    .then(data => res.status(201).send(data))
    .catch(next)
}

function removeComment(req, res, next) {
  runModel.removeComment(req.params.runId, req.params.commentId)
    .then(data => res.send(data))
    .catch(next)
}




module.exports = {
  getOne,
  create,
  remove,
  getRunUsers,
  addUserToRun,
  removeUserFromRun,
  getAllComments,
  postComment,
  removeComment
}