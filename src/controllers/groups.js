const groupModel = require('../models/groups')

function getOne(req, res, next) {
  groupModel.getOne(req.params.groupId)
    .then(([data]) => res.send(data))
    .catch(next)
}

function create(req, res, next) {
  if (!req.body.name || !req.body.description) {
    return next({ status: 400, message: 'Could not create group' })
  }
  groupModel.create(req.body.name, req.body.description)
    .then(data => res.status(201).send(data))
    .catch(next)
}

function remove(req, res, next) {
  groupModel.remove(req.params.groupId)
    .then(data => res.send(data))
    .catch(next)
}

function getGroupUsers(req, res, next) {
  groupModel.getGroupUsers(req.params.groupId, req.query.leader)
    .then(data => res.send(data))
    .catch(next)
}

function addUserToGroup(req, res, next) {
  groupModel.addUserToGroup(req.params.groupId, req.params.userId)
    .then(data => res.send(data))
}

function removeUserFromGroup(req, res, next) {
  groupModel.removeUserFromGroup(req.params.groupId, req.params.userId)
    .then(data => res.send(data))
}

function getGroupRuns(req, res, next) {
  groupModel.getGroupRuns(req.params.groupId)
    .then(data => res.send(data))
    .catch(next)
}

function getAllComments(req, res, next) {

}

function postComment(req, res, next) {

}

function removeComment(req, res, next) {

}


module.exports = {
  getOne,
  create,
  remove,
  getGroupUsers,
  addUserToGroup,
  removeUserFromGroup,
  getGroupRuns,
  getAllComments,
  postComment,
  removeComment
}