const express = require('express')
const router = express.Router({mergeParams: true})
const groupController = require('../controllers/groups')
const userController = require('../controllers/users')
const runController = require('../controllers/runs')
// const authController = require('../controllers/auth')

router.get('/', groupController.getAll)

router.get('/:runId', groupController.getOne)

router.post('/', groupController.create)

router.delete('/:runId', groupController.remove)



router.get('/:runId/comments', groupController.getAllComments)

router.post('/:runId/comments', groupController.postComment)

router.delete('/:runId/comments/:commentId', groupController.removeComment)


module.exports = router