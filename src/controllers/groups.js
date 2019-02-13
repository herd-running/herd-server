const groupModel = require('../models/groups')

function getGroups(req, res, next) {
  const bool = JSON.parse(req.query.member)
  if (bool) {
    groupModel.getUsersGroups(req.params.userId)
      .then(data => res.send(data))
      .catch(next)
  }

  else {
    groupModel.getNewGroups(req.params.userId)
      .then(data => res.send(data))
      .catch(next)
  }
}

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

function getAllComments(req, res, next) {

}

function postComment(req, res, next) {

}

function removeComment(req, res, next) {

}


module.exports = {
  getGroups,
  getOne,
  create,
  remove,
  getAllComments,
  postComment,
  removeComment
}